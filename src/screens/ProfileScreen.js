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
import PostCard from "../components/PostCard";
import React, { useState, useEffect } from "react";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState("");

  return (
    <SafeAreaView style={styles.Container}>
      <Profile />
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
