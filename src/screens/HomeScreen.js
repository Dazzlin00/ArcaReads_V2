import React, { useState, useEffect } from "react";
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
  FlatList,
} from "react-native";
import AddPostForm from "../components/AddPostForm";
import PostCard from "../components/PostCard";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import StoriesBar from "../components/StoriesBar";
import { BASE_URL } from "../../config";
import axios from "react-native-axios";
import moment from "moment";
import "moment/locale/es";

import { useQuery } from "react-query";

function HomeScreen({ navigation }) {
  moment.locale("es");
//------------------------------------------------------------------------------------------------------------//
//-------------------------------------MUESTRA LOS POST-------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/posts/getPost`);
      return response.data;
    },
  });
console.log(data)
  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          error ? "error" : isLoading ?   <ActivityIndicator size={"large"} /> : <PostCard post={item} />
        }
        keyExtractor={(item) => {
          return item.id || Math.random().toString();
        }} // generar una clave aleatoria si el id no está definido
        ListHeaderComponent={
          <>
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
              <TouchableOpacity style={styles.notificationButton}>
                <Ionicons
                  name="notifications-outline"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </LinearGradient>
            <StoriesBar />
            <AddPostForm />
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,

    flex: 1,
    backgroundColor: "white",
  },
  logocontainer: {
    height: 80,
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
    marginRight: 30,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  linearGradient: {},
  postCardContainer: {
    marginBottom: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    backgroundColor: "green",
  },
});
export default HomeScreen;
