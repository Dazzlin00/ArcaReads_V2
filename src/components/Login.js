import React from 'react';
import { View, Text, TextInput, Button,StyleSheet,Image,TouchableOpacity,Field } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



//export default function Login() {
 // const [email, setEmail] = React.useState('');
  //const [password, setPassword] = React.useState('');

  //const handleLogin = () => {
    // Lógica para iniciar sesión
  //};


  function Login(){
   
    const navigation = useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleLogin = () => {
      navigation.navigate('Home');
    };


    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }} // Agrega contentContainerStyle en lugar de estilo directo
        enableOnAndroid={true} // Agrega esta prop si tu dispositivo es Android
        keyboardDismissMode="interactive" // Agrega esta prop para desactivar el teclado con la interaccion
      >
        <View style={styles.container}>
          <View style={styles.header1} />
          <Text style={styles.text}>Bienvenidos a</Text>
          <View style={styles.imagenContainer}>
            <Image
              style={styles.imagen}
              source={require("../../assets/logo.png")}
            />
          </View>
          <Text style={styles.text}>Iniciar Sesión</Text>
       
          <Text style={styles.textuser}>Usuario</Text>
      <TextInput style={styles.textInput} value={email} onChangeText={setEmail}  placeholder="correo@correo.com"/>

      <Text style={styles.textcontra}>Contraseña </Text>
      <TextInput style={styles.textInput} value={password} onChangeText={setPassword} placeholder="********" secureTextEntry />

      
      <TouchableOpacity
        style={styles.buttonInit} //aplica el objeto de estilo al componente TouchableOpacity, que actuará como nuestro botón personalizado
        onPress={handleLogin} 
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

  
          <Text style={styles.texto}>¿No tienes cuenta todavia?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.buttonTex}>Regístrate aquí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.buttonTex}>Reestablecer Contraseña</Text>
          </TouchableOpacity>
          <View style={styles.header2} />
        </View>
      </KeyboardAwareScrollView>
    );
  }


  const styles = StyleSheet.create({
    textInput: {
      marginBottom: 15,
      backgroundColor: "#D5D8DC",
      borderRadius: 20,
      paddingVertical: 18,
      paddingHorizontal: 10,
      width: 250,
      
  
      
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
     
    },
    header1: {
      flex: 1,
      backgroundColor: "#1B3A4A",
      height: 60, //o la altura que desees
      width: "100%",
      
      
    },
    header2: {
      flex: 1,
      backgroundColor: "#1B3A4A",
      height: 60, //o la altura que desees
      width: "100%",
      marginTop:20
      
    },
    button: {
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginBottom: 1,
    },
    buttonTex: {
      
      color: "#671067",
      fontWeight: "bold",
      fontSize: 18,
    },
    texto: {
      textAlign: "center",
      color: "#17202A",
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 1,
      marginTop: 1,
     
    },
    imagen: {
      flex: 1,
  
      resizeMode: "contain",
      marginBottom: 2,
      marginTop: 2,
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
      fontFamily: "Roboto",
      textAlign: "center",
      marginBottom: 2,
      marginTop: 2,
    },
    imagenContainer: {
      alignItems: "center", // Centra la imagen en el contenedor
  
      width: 350, // Se agrega ancho al contenedor
      height: 100, // Se agrega altura al contenedor
      justifyContent: "center",
    },
    textuser:{
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "Roboto",
      
      textAlign: "left",
      marginBottom: 10,
      marginTop: 2,
  
    },
    textcontra:{
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "Roboto",
      textAlign: "left",
      marginBottom: 10,
      marginTop: 1,
     
  
    },
    buttonInit: {
      backgroundColor: "#4D194D",
      paddingHorizontal: 10,
      alignSelf: "center",
      paddingVertical: 15,
      borderRadius: 50,
      width: 200,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
    },
  });
  
  export default Login;
  