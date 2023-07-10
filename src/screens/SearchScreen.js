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
import Search from "../components/Search";
import Carrusel from "../components/Carrusel";

import { LinearGradient } from "expo-linear-gradient";
import Gallery from "../components/Gallery";

function SearchScreen() {
  const navigation = useNavigation();
  const images = [
    require('../../assets/harry.jpeg'),
    require('../../assets/hobbit.jpeg'),
    require('../../assets/instituto.jpeg'),
    require('../../assets/panda.jpg'),
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Search />
        <Carrusel images={images} />
        <Gallery  />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor:'white',
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

export default SearchScreen;