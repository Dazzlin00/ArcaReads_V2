
import { Ionicons } from "react-native-vector-icons";
import Profile from "../components/Profile";
import Galeria from "../components/Galeria";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import PostCard from "../components/PostCard";
import React, { useState,useEffect } from "react";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState("");

  useEffect(() => {
    axios.get(`${BASE_URL}/posts/getPost`).then((response) => {
      setPosts(response.data);
      console.log(response.data)
    });
  }, []);
 
  return (
    <SafeAreaView style={styles.Container}>
      
        <LinearGradient
          colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.logocontainer}
        >
          <View style={styles.logoWrapper}>
            <Image
              source={require("../../assets/logoblanco.png")}
              style={styles.imagelogo}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={styles.notificationButton}
          >
          <Ionicons name="settings-outline" size={30} color="white" />
          </TouchableOpacity>
        </LinearGradient>
  
        <Profile />
        <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()}
       /> 
    
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
