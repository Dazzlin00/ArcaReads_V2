import React, { useState } from "react";
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

const Home = ({ username, date, text, profileImage, postImage }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [saved, setSaved] = useState(false); //Guardar
  const navigation = useNavigation();
  const handleComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleOpenComments = () => {
    navigation.navigate("Comentarios");
  };

  const toggleImageModal = () => {
    setIsImageModalVisible(!isImageModalVisible);
  };
  const handleSave = () => {
    setSaved(!saved);
  };

  const handleUsernameClick = () => {
    navigation.navigate("Profile"); // Me dirige al perfil de usuario
  };

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
   flex:1,
    height: '100%', // agrega esta propiedad
    width:'100%',
   
    marginBottom:5,
    backgroundColor:'black',
  },
});

export default Home;