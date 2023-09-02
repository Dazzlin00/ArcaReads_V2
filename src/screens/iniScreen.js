import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Field,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LinearGradient } from "expo-linear-gradient";
function IniScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/fondo12.jpg")}
      blurRadius={3}

      style={styles.imageBackground}
    >
      <LinearGradient
        colors={[
          "rgba(238,174,202,0.5)",
          "rgba(93,135,218,0.8)",
          
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}
      >
        
        <Image
          source={require("../../assets/nn.png")} // Ruta de la imagen
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0.5,
  },
 
  image: {
    resizeMode: "contain",
    width: "70%", // Ancho de la imagen
    height: "50%", // Altura de la imagen
    marginBottom: 10, // Espacio entre la imagen y el botón
    
  },
  button: {
    
    backgroundColor: "rgba(6,18,38,0.3)",
    borderRadius: 20,
    paddingHorizontal: 120,
    paddingVertical: 20,

    padding: 20,
    position: "absolute", // Posición absoluta
    bottom: 10, // Posición en la parte inferior del contenedor
    
  },
  buttonText: {
    color: "white",
    fontSize: 15,
 
    textAlign: "center",
  },
});

export default IniScreen;
