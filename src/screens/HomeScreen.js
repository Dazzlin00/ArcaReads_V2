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
      text: "¡Hola a todos! ¿Cómo están?",
      avatar:require('../../assets/eli.jpg'),
      username:'Elizabeth Gomez',
      timestamp:'11:34 AM',
      image: "https://picsum.photos/id/237/200/300",
      date: "2022-07-09T12:34:56.000Z",
    },
    {
      id: 2,
      text: "Este es mi primer post en esta app",
      avatar:require('../../assets/panda.jpg'),
      username:'Omerly Mendoza',
      timestamp:'12:34 AM',
      image: "https://picsum.photos/id/238/200/300",
      date: "2022-07-08T09:15:23.000Z",
    },
    {
      id: 3,
      text: "¡Estoy emocionado de unirme a esta comunidad!",
      avatar:require('../../assets/fondo12.jpg'),
      username:'hilary clinton',
      timestamp:'12:34 AM',
      date: "2022-07-07T18:45:12.000Z",
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
    renderItem={({ item }) => 
    
    <PostCard post={item} />}
    keyExtractor={(item) =>
      item.id ? item.id.toString() : Math.random().toString()
    } // generar una clave aleatoria si el id no está definido
    ListHeaderComponent={
      <>
        
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
  },

  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    
   
   
  },
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
