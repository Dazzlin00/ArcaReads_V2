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


  function Login() {
   
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      keyboardDismissMode="interactive"
    >
      <View style={styles.header} />
      <Text style={styles.text}>Bienvenidos a</Text>
      <View style={styles.imagenContainer}>
        <Image
          style={styles.imagen}
          source={require("../../assets/logo.png")}
        />
      </View>
      <Text style={styles.text}>Iniciar Sesión</Text>
       
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="correo@correo.com"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>¿No tienes cuenta todavia?</Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.linkText}>Regístrate aquí</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.linkText}>Reestablecer Contraseña</Text>
      </TouchableOpacity>
      <View style={styles.footer} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    alignItems: "center",
    justifyContent: "center",
    padding: 0.5, 
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#1B3A4A",
    height: 60,
    width: "100%",
   
  },
  footer: {
    backgroundColor: "#1B3A4A",
    height: 60,
    width: "100%",
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  imagenContainer: {
    alignItems: "center",
    width: "100%",
    height: 90,
    justifyContent: "center",
    
  },
  imagen: {
    flex: 1,
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 15,
    
    width: "100%",
  },
  input: {
    backgroundColor: "#D5D8DC",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 10,
    width: "70%",
    marginBottom: 15,
  },
    button: {
    backgroundColor: "#4D194D",
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderRadius: 50,
    width: "40%",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    
  },
  texto: {
    textAlign: "center",
    color: "#17202A",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    width: "100%",
  },
  link: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
  },
  linkText: {
    color: "#671067",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
   
    marginBottom:1
  },
});

export default Login;