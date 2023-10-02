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
import { useNavigation } from "@react-navigation/native";
import SeguidoresScreen from "../screens/SeguidoresScreen";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";
import { useQuery } from "react-query";
import { Ionicons } from "react-native-vector-icons";
import AddPostForm from "../components/AddPostForm";
import PostCard from "../components/PostCard";


export default ProfileView = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const navigation = useNavigation();


  const [name, setName] = useState(""); // Nombre de usuario predeterminado
  const [avatar, setAvatar] = useState(""); // Nombre de usuario predeterminado
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  useEffect(() => {
    setName(userInfo.name); // Actualizar el estado con el nombre de usuario
  }, []);

  const openPhotoModal = () => {
    setIsImageModalVisible(!isImageModalVisible);
  };

  const handleButton1Press = () => {
    //console.log('Botón 1 presionado');
    navigation.navigate("SeguidoresScreen");
  };

  const handleButton2Press = () => {
    //console.log("Botón 2 presionado");
    navigation.navigate("SeguidosScreen");
  };
  //------------------------------------------------------------------------------------------------------------//
  //-------------------------------------MUESTRA LOS POST-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const { isLoading, error, data } = useQuery({
    queryKey: ["postsuser"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/posts/getPostUser`);
      return response.data;
    },
  });
  return (
    <View style={styles.container}>
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
          <Image
            source={{ uri: userInfo.profilepic }}
            style={styles.modalImage}
          />
        </TouchableOpacity>
      </Modal>

      {/*------------------------------------------------POST DEL USUARIO-----------------------------------------------*/}

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            error ? (
              "error"
            ) : isLoading ? (
              <ActivityIndicator size={"small"} />
            ) : (
              <PostCard post={item} />
            )
          }
          keyExtractor={(item) => {
            return item.id || Math.random().toString();
          }}
          ListHeaderComponent={
            <View>
              <View style={styles.contain}>
                {/*-----------------------------------HEADER-----------------------------------------------*/}

                <LinearGradient
                  colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.logocontainer}
                >
                  <View style={styles.logoWrapper}>
                    <Image
                      source={require("../../assets/logoblanco.png")}
                      style={styles.imagelogo}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Settings")}
                    style={styles.notificationButton}
                  >
                    <Ionicons name="settings-outline" size={30} color="white" />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <TouchableOpacity onPress={openPhotoModal}>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: userInfo.profilepic,
                      }}
                    />
                  </TouchableOpacity>

                  <Text style={styles.name}>{name}</Text>
                </View>
              </View>
              {/*-----------------------------------BOTONES PARA VER LOS SEGUIDORES Y LOS SEGUIDOS-----------------------------------------------*/}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <LinearGradient
                  colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.button}
                >
                  <TouchableOpacity onPress={handleButton1Press}>
                    <Text style={styles.buttonText}>Seguidores</Text>
                  </TouchableOpacity>
                </LinearGradient>

                <LinearGradient
                  colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.button}
                >
                  <TouchableOpacity onPress={handleButton2Press}>
                    <Text style={styles.buttonText}>Seguidos</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <AddPostForm />
            </View>
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
    justifyContent: "center",

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

  Contain: {
    flex: 1,
    marginTop: 20,

    backgroundColor: "white",
  },
  logocontainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: {
    width: 160,
  },
  imagelogo: {
    resizeMode: "contain",
    margin: 20,

    width: "100%",
    height: "100%",
  },

  notificationButton: {
    marginRight: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
  button: {
    width: "50%",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 0.5, //mueve los botones hacia arriba o abajo
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
