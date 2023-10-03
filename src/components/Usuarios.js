import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useQuery } from "react-query";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "react-query";

export default Usuarios = () => {
  const { userInfo } = useContext(AuthContext); // AUTENTICACION
  const [id, setId] = useState(userInfo.id);

 
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/users/getAllUser?id=${userInfo.id}`);
      return response.data;
    },
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(data);

  useEffect(() => {
    // Actualizar users cuando data cambie
    setUsers(data);
  }, [data]);



 const [followingUsers, setFollowingUsers] = useState([]); // Estado para realizar un seguimiento de los usuarios seguidos
 
 
  const { isLoading:isLoadingfollow,data:datafollow } = useQuery({
    queryKey: ["follows"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/relations/getAllRelations?followerUserId=${userInfo.id}`);
      return response.data;
    },
  });

console.log(id+"user")

useEffect(() => {
  // Actualizar users cuando data cambie
  setId(id);
}, [id,datafollow]);


  const toggleFollow = async (id) => {
    try {
      const isCurrentlyFollowing = isFollowing(id);

      if (isCurrentlyFollowing) {
        // Si ya está siguiendo, eliminar de la lista de seguidores en la base de datos
        await axios.delete( `${BASE_URL}/relations/deleteRelations?followedUserId=${id}`)
      } else {
        // Si no está siguiendo, agregar a la lista de seguidores en la base de datos
        await axios.post(`${BASE_URL}/relations/addRelations`, {
          followedUserId: id,
        });
      }

      // Actualizar la lista de seguidores en el cliente después de la operación exitosa
      setFollowingUsers((prevFollowingUsers) =>
        isCurrentlyFollowing
          ? prevFollowingUsers.filter((userId) => userId !== id)
          : [...prevFollowingUsers, id]
      );
    } catch (error) {
      console.error("Error al cambiar el estado de seguimiento:", error);
      // Aquí puedes mostrar una alerta u otra lógica de manejo de errores
    }
  };



  const isFollowing = (id) => {
    // Comprobar si el usuario actual está siguiendo a este usuario
   return followingUsers.includes(id);
   

    
  };

  const searchFilterFunction = (text) => {
    setSearchTerm(text);
    const newData = data.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setUsers(newData);
  };

  console.log(datafollow+ "dataffff")

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchTerm}
        underlineColorAndroid="transparent"
        placeholder="Buscar usuario"
      />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={users}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                toggleFollow(item.id);
              }}
            >
              <View style={styles.cardHeader}></View>
              <Image style={styles.userImage} source={{ uri: item.profilepic }} />
              <View style={styles.cardFooter}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <LinearGradient
                    colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
                    style={styles.followButton}
                  >
                    <TouchableOpacity onPress={() => toggleFollow(item.id)}>
                      <Text style={styles.followButtonText}>
                        { isLoadingfollow? "loading" :datafollow?.includes(item.id) || isFollowing(item.id) ? "Siguiendo" : "Seguir"}
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  list: {
    maxHeight: '84%',
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },

  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: "white",
    flexBasis: "46%",
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: -5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 60,
    alignSelf: "center",
    borderColor: "#DCDCDC",
    borderWidth: 3,
  },
  name: {
    fontSize: 16,
    flex: 1,
    alignSelf: "center",
    color: "#4D194D",
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
  followButton: {
    marginTop: 2, //mueve el boton hacia arriba o hacia abajo
    height: 35,
    width: 90,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  icon: {
    height: 15,
    width: 15,
  },

  inputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
