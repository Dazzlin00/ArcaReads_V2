import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Add from "../components/Add";
import { LinearGradient } from "expo-linear-gradient";

function AddScreen() 
{
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/fondo12.jpg")}
        blurRadius={3}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={["rgba(238,174,202,0.5)", "rgba(93,135,218,0.8)"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.linearGradient}
        >
          <ScrollView style={styles.scrollView}>
            <Add navigation={navigation} />
          </ScrollView>

          <Text style={styles.text}>HOLA DESDE SCREEN Add</Text>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },
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
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
});

export default AddScreen;
