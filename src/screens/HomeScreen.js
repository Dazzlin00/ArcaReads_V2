import React, { useState } from "react";
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
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import StoriesBar from "../components/StoriesBar";

import Home from "../components/Home";
import moment from "moment";
import "moment/locale/es";

function HomeScreen({ navigation }) {
  moment.locale("es");

  const formatDate = (date) => {
    return moment(date).format("D [de] MMMM YYYY");
  };
  const [posts, setPosts] = useState([
    {
      id: 1,
      title:"Harry Potter",
      text: "Harry  es un joven mago que descubre su destino mientras asiste a la escuela de magia Hogwarts, luchando contra el malvado Voldemort.",
      avatar: require("../../assets/eli.jpg"),
      username: "Elizabeth Gomez",
      timestamp: "11:34 AM",
      image: require("../../assets/harry.jpeg"),
     
    },
    {
      id: 2,
      title:"El Hobbit",
      text: "Bilbo, un hobbit, se une a una expedición para recuperar un tesoro custodiado por un dragón solitario en la Montaña Solitaria.",
      avatar: require("../../assets/panda.jpg"),
      username: "Omerly Mendoza",
      timestamp: "12:34 AM",
      image: require("../../assets/hobbit.jpeg"),
    
    },
    {
      id: 3,
      title:"El instituto",
      text: "Un grupo de jóvenes con habilidades psíquicas son secuestrados y encerrados en un centro de investigación secreto.",
      avatar: require("../../assets/eliza.jpg"),
      username: "Eliza Graterol",
      image: require("../../assets/instituto.jpeg"),
      timestamp: "12:34 AM",
      
    },
  ]);
  const handleAddPost = (post) => {
    setPosts([post, ...posts]);
    console.log("New post HOme:", post);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()
        } // generar una clave aleatoria si el id no está definido
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
            <AddPostForm onSubmit={handleAddPost} />
            <Home navigation={navigation} />
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
    justifyContent: 'space-between',
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
