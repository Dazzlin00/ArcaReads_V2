import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";

export default ProfileView = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION



  const [name, setName] = useState(""); // Nombre de usuario predeterminado
  const [avatar, setAvatar] = useState(""); // Nombre de usuario predeterminado
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  useEffect(() => {
    // Realizar una llamada a la API para obtener el nombre de usuario

    setName(userInfo.name); // Actualizar el estado con el nombre de usuario
  }, []);

  const openPhotoModal = () => {
    setIsImageModalVisible(!isImageModalVisible);

  };

  const handleButton1Press = () => {
    console.log('Botón 1 presionado');
  };

  const handleButton2Press = () => {
    console.log('Botón 2 presionado');
  };

  return (
    <View style={styles.container}>
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
          <Image source={{  uri: userInfo.profilepic }} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
 

  
  button: {
    width: '50%',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0.50,//mueve los botones hacia arriba o abajo 
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
 

  header: {
    backgroundColor: "rgba(93,135,218,0.6)",
  },
  headerContent: {
    padding: -20,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,//mueve el tamanno del avatar
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
    marginTop: 100, //mueve la posicion del boton de seguidores y seguidos
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "70%",
    position: "absolute",
    backgroundColor: "#4D194D",
    borderRadius: 10,
  },
  detailContent: {
    margin: 2, //antes en 10 mueve el tamanno del detalle de seguidores 
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
    marginTop: -60, //mueve la parte de los post
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
    width: 350,
    height: 350,
    borderRadius: 250,
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
