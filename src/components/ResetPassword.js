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

function ResetPassword() {
  const navigation = useNavigation();
  const [message, setMessage] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    if (!email || !password || !confirmPassword) {
      setMessage("Por favor complete todos los campos.");
      return;
    }
  
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }
  
    setMessage("Registrado correctamente");

    navigation.navigate("Login");
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Imagecontainer}>
        <Image
          source={require("../../assets/candado.png")}
          style={[
            styles.image,
            { width: windowWidth / 2, height: windowHeight / 4 },
          ]}
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
        
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setMessage("")}
          placeholder="Codigo de Verificación"
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
      <Text style={styles.mess} >{message}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
       
        <Text style={styles.buttonText}>Reestablecer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 45,
    borderRadius: 50,
  },
  Imagecontainer: {
    paddingBottom: 15,
    
    
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
    paddingBottom: 5,
    marginBottom: 20,
    width: 300,
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
    paddingHorizontal: 100,
    paddingVertical: 20,
    margin: 10,
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
  mess:
  {

    fontSize: 16,
    color: "purple", 
  }
});

export default ResetPassword;