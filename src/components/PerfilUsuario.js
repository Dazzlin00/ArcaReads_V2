import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";
import { useRoute } from "@react-navigation/native";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";
import { useQuery } from "react-query";
import PostCard from "../components/PostCard";

export default PerfilUsuario = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const [datas, setDatas] = useState([]);

  const route = useRoute();
  const [userId, setUserId] = useState(route.params.userId);

  const [name, setName] = useState(""); // Nombre de usuario predeterminado
  const [avatar, setAvatar] = useState(""); // Nombre de usuario predeterminado
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/getUser?id=${userId}`);
      setDatas(response.data);
      console.log(datas.body + "datasss");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Realizar una llamada a la API para obtener el nombre de usuario
    fetchData();
  }, []);

  const openPhotoModal = () => {
    setIsImageModalVisible(!isImageModalVisible);
  };

  //------------------------------------------------------------------------------------------------------------//
  //-------------------------------------INFORMACION DEL USUARIO------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//

  //------------------------------------------------------------------------------------------------------------//
  //-------------------------------------MUESTRA LOS POST-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//

  const { isLoading, error, data } = useQuery({
    queryKey: ["postsuserid"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/posts/getPostUserId?userId=${userId}`
      );
      console.log(response.data.name + "desde post");
      return response.data;
    },
  });

  console.log(userId + "este es el id del usuario");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {datas.map((item) => (
            <View>
              <TouchableOpacity onPress={openPhotoModal}>
                <Image
                key={item.id}
                  style={styles.avatar}
                  source={{
                    uri: item.profilepic,
                  }}
                />
              </TouchableOpacity>
              <Text key={item.id} style={styles.name}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <LinearGradient
        colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.profileDetail}
      >
        <View style={styles.detailContent}>
          <Text style={styles.title}>Post</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Seguidores</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Siguiendo</Text>
          <Text style={styles.count}>200</Text>
        </View>
      </LinearGradient>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
        </View>
      </View>

      {/* Modal para mostrar la foto en grande */}
      <Modal
        visible={isImageModalVisible}
        transparent={true}
        onRequestClose={openPhotoModal}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={openPhotoModal}
        >
           {datas.map((item) => (
          <Image
          key={item.id}
            source={{ uri: item.profilepic }}
            style={styles.modalImage}
          />
          ))}
        </TouchableOpacity>
      </Modal>

      <View style={{ height: 390 }}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            error ? (
              "error"
            ) : isLoading ? (
              <ActivityIndicator size={"large"} />
            ) : (
              <View>
                <PostCard post={item} />
              </View>
            )
          }
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(93,135,218,0.6)",
  },
  headerContent: {
    padding: -20,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: -5, //mueve la parte del nombre ESTABA en -6
  },
  name: {
    fontSize: 19,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  profileDetail: {
    alignSelf: "center",
    marginTop: 110, //200
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "70%",
    position: "absolute",
    backgroundColor: "#4D194D",
    borderRadius: 10,
  },
  detailContent: {
    margin: 5, //antes en 10
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  count: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30, //30
    marginTop: -11,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop: 10, //10
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00CED1",
  },
  description: {
    fontSize: 20,
    color: "#00CED1",
    marginTop: 10,
    textAlign: "center",
  },

  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
