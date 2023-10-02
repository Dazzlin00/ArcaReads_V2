import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export default Settings = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const [avatar, setAvatar] = useState(""); // Nombre de usuario predeterminado
  const [name, setName] = useState(""); // Nombre de usuario predeterminado
  const [email, setEmail] = useState(""); // Nombre de usuario predeterminado
  const [address, setAdress] = useState(""); // Nombre de usuario predeterminado
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const navigation = useNavigation();
  

  const openPhotoModal = () => {
    setIsImageModalVisible(!isImageModalVisible);
  };

  const handleModalButtonPress = () => {
    console.log('Botón del modal presionado');
    // Aquí puedes agregar la lógica que quieras ejecutar cuando se presione el botón del modal
  };

  const handleModifyProfilePicture = () => {
    navigation.navigate("EditarPerfil");
  };

  const handleModifyInformation = () => {
    navigation.navigate("CambiarContrasenna");
  };

  const handleLogout = () => {
    navigation.navigate("CerrarSesion");
  };

  const handleDeactivateAccount = () => {
    navigation.navigate("Despedida");
  };
  useEffect(() => {
    // Realizar una llamada a la API para obtener el nombre de usuario

    setName(userInfo.name); // Actualizar el estado con el nombre de usuario
    setEmail(userInfo.email); // Actualizar el estado con el nombre de usuario
    setAdress(userInfo.city); // Actualizar el estado con el nombre de usuario
   
   
  }, []);
  return (

    <ScrollView>
      <LinearGradient colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]} style={styles.container}>
      <View style={styles.container}>
      
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
        
        <TouchableOpacity
        style={styles.modalButton}
        onPress={handleModalButtonPress}
        >
          <Text style={styles.modalButtonText}>Cambiar Foto</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      
      </Modal>





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

            <Text style={styles.name}>{name} </Text>
            <Text style={styles.userInfo}>{email} </Text>
            <Text style={styles.userInfo}>{address} </Text>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity
            style={styles.item}
            onPress={handleModifyProfilePicture}
          >
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/ediiiitar.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Editar Perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={handleModifyInformation}
          >
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/cambiarrr.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Cambiar Contraseña </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleLogout}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/cerrar.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Cerrar sesion</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={handleDeactivateAccount}
          >
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/basura.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Desactivar Cuenta</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "rgba(93,135,218,0.6)",
  },
  headerContent: {
    padding: 45,
    alignItems: "center",
  },
  avatar: {
    width: 105,
    height: 105,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "#4D194D",
    marginBottom: -3,
  },
  name: {
    fontSize: 22,
    color: "#4D194D",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#FFFFFF",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: -80,
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 15,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#4D194D",
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
 
  modalButton: {
    marginTop: -150, //mueve el boton hacia arriba o hacia abajo
    height: 35,
    width: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
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