import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";

export default ProfileView = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION

  const [name, setName] = useState(""); // Nombre de usuario predeterminado
  const [avatar, setAvatar] = useState(""); // Nombre de usuario predeterminado
  const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false); // Estado para controlar si la foto en grande está visible o no

  useEffect(() => {
    // Realizar una llamada a la API para obtener el nombre de usuario

    setName(userInfo.name); // Actualizar el estado con el nombre de usuario
   
  }, []);

  const openPhotoModal = () => {
    setIsPhotoModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={openPhotoModal}>
            <Image
              style={styles.avatar}
              source={{
                uri: userInfo.profilepic 
              }}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{name}</Text>
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
        visible={isPhotoModalVisible}
        onRequestClose={() => setIsPhotoModalVisible(false)}
      >
        <View style={styles.photoModal}>
          <Image
            style={styles.photo}
            source={{ uri: userInfo.profilepic }}
          />
        </View>
      </Modal>
    </View>
  );
}

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
    marginBottom: -5,//mueve la parte del nombre ESTABA en -6
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
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#4D194D",
    borderRadius: 10,
  },
  detailContent: {
    margin: 3, //antes en 10
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  count: {
    fontSize: 16,
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

  photoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});



