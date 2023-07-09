import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Register from "../components/Register";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen({ navigation }) {
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
      
      
            <Register navigation={navigation} />
         
      
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
 
  
 
});