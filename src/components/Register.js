import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Field,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from "react-native-vector-icons";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";

function Register() {
  const navigation = useNavigation();
  const [message, setMessage] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [name, setNombre] = React.useState("");

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  console.log(email, username, name, password);
  
  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setMessage("Por favor complete todos los campos.");
      return;
    }
  
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }
  
    const data = {
      username: username,
      email: email,
      password: password,
      name: name,
    };
  
    axios.post(`${BASE_URL}/auth/register`, data)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Registrado correctamente");
          setTimeout(() => {
            navigation.navigate("Login");
          }, 2000);
         
        } else {
          console.log(JSON);
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.Imagecontainer}>
          <Image
            source={require("../../assets/user.png")}
            style={[
              styles.image,
              { width: windowWidth / 2, height: windowHeight / 4 },
            ]}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIcon}
            name="envelope"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setMessage("")}
            placeholder="Correo electrónico"
            placeholderTextColor="#EBEBEB"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIcon}
            name="user"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            onFocus={() => setMessage("")}
            placeholder="Nombre de usuario"
            placeholderTextColor="#EBEBEB"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIcon}
            name="user"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setNombre}
            onFocus={() => setMessage("")}
            placeholder="Nombre y Apellido"
            placeholderTextColor="#EBEBEB"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIcon}
            name="lock"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setMessage("")}
            placeholder="Contraseña"
            placeholderTextColor="#EBEBEB"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <FontAwesome
              style={styles.showPasswordIcon}
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIcon}
            name="lock"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onFocus={() => setMessage("")}
            placeholder="Repetir Contraseña"
            placeholderTextColor="#EBEBEB"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <FontAwesome
              style={styles.showPasswordIcon}
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.mess}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 45,
    borderRadius: 100,
  },
  Imagecontainer: {
    paddingBottom: 20,
  },
  image: {
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",

    marginBottom: "5%",
    width: "100%",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,

    fontSize: 16,
    color: "#fff",
  },
  showPasswordIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "rgba(6,18,38,0.3)",
    borderRadius: 20,
    width: 250,
    height: 60,
    justifyContent: "center",
    // paddingHorizontal: "40%",
    //paddingVertical: "5%",
    // margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,

    textAlign: "center",
  },
  linkContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  link: {
    marginVertical: 1,
  },
  linkText: {
    fontSize: 16,
    color: "#fff",
  },
  mess: {
    fontSize: 16,
    color: "purple",
  },
});

export default Register;
