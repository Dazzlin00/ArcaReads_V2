import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const PostCard = ({ post }) => {
  const navigation = useNavigation();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [saved, setSaved] = useState(false); //Guardar
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

  console.log("Postcard:", post);

  return (
    <View style={styles.container}>
      {/*----------------------------HEADER--------------------------------------------*/}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleUsernameClick}>
          <Image source={post.avatar} style={styles.avatar} />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={handleUsernameClick}>
            <Text style={styles.username}>{post.username}</Text>
          </TouchableOpacity>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>
      {/*----------------------------POSTIMAGEN--------------------------------------------*/}
      <Text style={styles.text}>{post.text}</Text>
      <View>
        <TouchableOpacity onPress={toggleImageModal}>
          {/* Agrega el onPress para abrir el modal */}
          <Image source={{ uri: post.image }} style={styles.image} />
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.leftButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={30}
              color={liked ? "#ba6bad" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOpenComments}>
            <Ionicons name="chatbubble-outline" size={29} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <FontAwesome
            name={saved ? "bookmark" : "bookmark-o"}
            size={30}
            color={saved ? "#ba6bad" : "gray"}
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

      <View style={styles.footer}>
        {/* Add any additional footer elements here */}
      </View>

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
          <Image source={{ uri: post.image }} style={styles.modalImage} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 7,
    elevation: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

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
});

export default PostCard;
