import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const PostCard = ({ post }) => {
  const navigation = useNavigation();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const handlePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleDelete = () => {
    Alert.alert(
      "Eliminar publicación",
      "¿Está seguro de que desea eliminar esta publicación?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => console.log("Publicación eliminada"),
          style: "destructive",
        },
      ]
    );
  };
  const handleEdit = () => {
    // Navegue a la pantalla de edición de publicación con los detalles de la publicación actual
  };

  console.log("Postcard:", post);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={post.avatar} style={styles.avatar} />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.username}>{post.username}</Text>
          </TouchableOpacity>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
        <View style={styles.popupContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePopup}>
            <MaterialIcons name="more-horiz" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.text}>{post.title}</Text>

      <Text style={styles.text}>{post.text}</Text>
      <View>
        <TouchableOpacity onPress={toggleImageModal}>
          <Image source={post.image} style={styles.image} />
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
            name={saved ? "star" : "star-o"}
            size={30}
            color={saved ? "#ffd700" : "gray"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.likesText}>{likes} Me gusta</Text>
        {comments.map((comment, index) => (
          <View key={index} style={{ flexDirection: "row" }}>
            <Text style={styles.username}>{post.username} </Text>
            <Text>{comment}</Text>
          </View>
        ))}
    
      </View>

      {/* Ventana emergente del menú */}
      <Modal visible={isPopupVisible} transparent={true}>
        <TouchableOpacity
          style={styles.popupModal}
          onPress={handlePopup}
          activeOpacity={1}
        >
          <View style={styles.popupMenu}>
            <TouchableOpacity style={styles.popupMenuItem} onPress={handleEdit}>
              <Text style={styles.popupMenuText}>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupMenuItem} onPress={handleDelete}>
              <Text style={styles.popupMenuText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupMenuItem} onPress={handlePopup}>
              <Text style={styles.popupMenuText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Modal de imagen */}
      <Modal
        visible={isImageModalVisible}
        transparent={true}
        onRequestClose={toggleImageModal}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={toggleImageModal}
        >
          <Image source={post.image} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  timestamp: {
    color: "gray",
    fontSize: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftButtonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginRight: 10,
  },
  likesText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  commentContainer: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 10,
  },
  commentInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    padding: 10,
  },
  addCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  popupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  popupMenu: {
    position: "absolute",
    top: 50,
    right: 0,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popupButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  popupText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  popupModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupMenu: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
  popupMenuItem: {
    padding: 5,
  },
  popupMenuText: {
    fontSize: 16,
  },
});

export default PostCard;