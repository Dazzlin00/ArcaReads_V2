import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";

export default ProfileView = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION

  const [name, setName] = useState(""); // Nombre de usuario predeterminado
  const [avatar, setAvatar] = useState(""); // Nombre de usuario predeterminado

  useEffect(() => {
    // Realizar una llamada a la API para obtener el nombre de usuario

    setName(userInfo.name); // Actualizar el estado con el nombre de usuario
    // setAvatar(userInfo.profilepic)//muestra la foto de perfil
    setAvatar(userInfo.profilepic);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
        <Image style={styles.avatar} source={{ uri: userInfo.profilepic }} />
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
          <Text style={styles.title}>Fotos</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(93,135,218,0.6)",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  profileDetail: {
    alignSelf: "center",
    marginTop: 200,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#4D194D",
    borderRadius: 10,
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
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
    padding: 30,
    marginTop: -11,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop: 10,
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
});
