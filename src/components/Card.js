import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ username, date, text, profileImage, postImage }) => {
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
     <View style={styles.header}>
  <TouchableOpacity onPress={handleUsernameClick}>
    <Image source={profileImage} style={styles.profilePicture} />
  </TouchableOpacity>
  <View style={styles.userInfo}>
    <TouchableOpacity onPress={handleUsernameClick}>
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
    <Text style={styles.date}>{date}</Text>
  </View>
</View>

      <Text style={styles.text}>{text}</Text>
      <View>
        <TouchableOpacity onPress={toggleImageModal}>
          {/* Agrega el onPress para abrir el modal */}
          <Image source={postImage} style={styles.postImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.leftButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={30}
              color={liked ? "#671067" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOpenComments}>
            <Ionicons name="chatbubble-outline" size={29} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <FontAwesome
            name={saved ? "bookmark" : "bookmark-o"}
            size={30}
            color={saved ? "#671067" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <Text key={index} style={styles.commentText}>
            {comment}
          </Text>
        ))}
      </View>

      {/* Modal para mostrar la imagen */}
      <Modal
        visible={isImageModalVisible}
        transparent={true}
        onRequestClose={toggleImageModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleImageModal}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
          <Image source={postImage} style={styles.modalImage} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  leftButtonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginRight: 10,
  },
  commentsContainer: {
    marginTop: 10,
  },
  commentText: {
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  //Al clickear la imagen se ve en una pantalla pequeña
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  modalImage: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
 
  date: {
    fontSize: 13,
    color: "#000000",
  },
});

export default Card;
