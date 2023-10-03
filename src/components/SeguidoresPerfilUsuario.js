import React, { useState,useContext ,useEffect} from 'react'
import { StyleSheet, Text, TextInput,View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";
import { useRoute } from "@react-navigation/native";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";
import { useQuery } from "react-query";


export default SeguidoresPerfilUsuario = () => {
  const route = useRoute();
  const [userId, setUserId] = useState(route.params.userId);
  const { userInfo } = useContext(AuthContext); // AUTENTICACION

  const [users, setUsers] = useState(data);

  const [searchTerm, setSearchTerm] = useState("");


 

  const searchFilterFunction = (text) => {
    setSearchTerm(text);
    const newData = data.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setUsers(newData);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["seguidosotroperfil"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/users/getAllSeguidoresOtroPerfil?followedUserId=${userId}`
      );
      return response.data;
    },
  });
  useEffect(() => {
    if (data) {
      // Actualizar users cuando data tenga datos válidos
      setUsers(data);
    }
  }, [userId,data]);
  console.log(userId+"userid")
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloText}>Total de Seguidos:<Text>{users?.length}</Text></Text>
      </View>
      
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
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}></View>
              <Image
                style={styles.userImage}
                source={{ uri: item.profilepic }}
              />
              <View style={styles.cardFooter}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.name}>{item.name}</Text>
                  <LinearGradient
                    colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
                    style={styles.followButton}
                  >
                    <TouchableOpacity>
                      <Text style={styles.followButtonText}>Siguiendo</Text>
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
    maxHeight: "84%",
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  tituloContainer: {
    marginTop: -3,
    alignItems: 'center',
  },

  tituloText: {
    color: '#4D194D',
    fontSize: 21,
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
    paddingVertical: 10,
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
    borderRadius: 5,
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
