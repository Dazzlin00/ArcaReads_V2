
import { Ionicons } from "react-native-vector-icons";
import Profile from "../components/Profile";
import Galeria from "../components/Galeria";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";

import PerfilUsuario from "../components/PerfilUsuario";

export default function ProfileUsuarioScreen() {
  const navigation = useNavigation();





  return (
    <SafeAreaView style={styles.Container}>
    
      <PerfilUsuario />
     
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 20,

    backgroundColor: "white",
  },
  logocontainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: {
    width: 160,
  },
  imagelogo: {
    resizeMode: "contain",
    margin: 20,

    width: "100%",
    height: "100%",
  },

  notificationButton: {
    marginRight: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
});