import React, { useState, useContext, useEffect } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { BASE_URL } from "../../config";
import axios from "react-native-axios";
import { useMutation, useQueryClient } from "react-query";
import { ScrollView } from "react-native-web";

function PostCard({ post }) {
  const navigation = useNavigation();
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editDescription, setEditDescription] = useState(post.desc);

  const toggleEditModal = () => {
    setEditTitle(post.title);
    setEditDescription(post.desc);

    setIsEditModalVisible(!isEditModalVisible);
  };
  const handleEditTitleChange = (text) => {
    setEditTitle(text);
  };

  const handleEditDescriptionChange = (text) => {
    setEditDescription(text);
  };

  //------------------------------------------------------------------------------------------------------------//
  //-------------------------------------------ACTUALIZAR POST-------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const datos = {
    title: editTitle,
    desc: editDescription,
  };
  function actualizar() {
    return axios
      .put(`${BASE_URL}/posts/updatePost?id=${post.id}`, datos)

      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Post Actualizado", "El post se ha actualizado", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
          return response.data;
        } else {
          Alert.alert("Error", "El post no pudo ser actualizado", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  const { mutate: mutatepost } = useMutation({
    mutationFn: actualizar,

    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      queryClient.invalidateQueries(["postss"]);

    },
  });

  const handleEdit = () => {
    Alert.alert(
      "Actualizar publicación",
      "¿Está seguro de que desea actualizar esta publicación?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Actualizar",
          onPress: () => mutatepost({ editTitle, editDescription }),

          style: "default",
        },
      ]
    );

    queryClient.refetchQueries("posts");
    queryClient.refetchQueries("postss");

  };
  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------MUESTRA LA CANTIDAD DE LIKES-----------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const { isLoading, error, data } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/likes/getLikes?postId=${post.id}`
      );
      return response.data;
    },
  });

  const queryClient = useQueryClient();
  //------------------------------------------------------------------------------------------------------------//
  //-------------------------------------------ELIMINA Y AGREGA LIKES-------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const { mutate } = useMutation({
    mutationFn: (liked) => {
      if (liked) {
        return axios.delete(`${BASE_URL}/likes/deleteLikes?postId=${post.id}`);
      } else {
        return axios.post(`${BASE_URL}/likes/addLikes`, { postId: post.id });
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["likes"]);
    },
  });
  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------DAR ME GUSTA--------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const handleLike = () => {
    mutate(data?.includes(userInfo.id));
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
  const {
    isLoading: isLoadingPost,
    error: errorPost,
    data: dataPost,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/posts/getPost`);
      return response.data;
    },
  });
  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------ELIMINA-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//

  const { mutate: postmutation } = useMutation({
    mutationFn: (postId) => {
      return axios.delete(`${BASE_URL}/posts/deletePost?id=${post.id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
     queryClient.invalidateQueries(["postss"]);

    },
  });

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
          onPress: () => postmutation(dataPost?.includes(userInfo.id)),

          style: "destructive",
        },
      ]
    );

    queryClient.refetchQueries("posts");
    queryClient.refetchQueries("postss");

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/*-----------------------------------------BOTON QUE PERMITE IR AL PERFIL DE USUARIOS-------------------------------------------------*/}

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PerfilUsuario", { userId: post.userId })
            }
          >
            <Image source={{ uri: post.profilepic }} style={styles.avatar} />
          </TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PerfilUsuario", { userId: post.userId })
              }
            >
              <Text style={styles.username}>{post.name}</Text>
            </TouchableOpacity>
            <Text style={styles.timestamp}>{post.createdAt}</Text>
          </View>
        </View>
        <View style={styles.popupContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePopup}>
            <MaterialIcons name="more-horiz" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      {/*-----------------------------------------TITULO Y DESCRIPCION DEL POST-------------------------------------------------*/}

      <Text style={styles.text}>{post.title}</Text>

      <Text style={styles.text}>{post.desc}</Text>
      {/*-----------------------------------------BOTON PARA VER LA IMAGEN EN UNA MODAL-------------------------------------------------*/}

      <View>
        <TouchableOpacity onPress={toggleImageModal}>
          <Image source={{ uri: post.img }} style={styles.image} />
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.leftButtonsContainer}>
          {/*-----------------------------------------BOTON PARA DAR O QUITAR ME GUSTA-------------------------------------------------*/}

          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Ionicons
              name={
                
                 data?.includes(userInfo.id)
                  ? "heart"
                  : "heart-outline"
              }
              size={30}
              color={
               data?.includes(userInfo.id)
                  ? "#ba6bad"
                  : "gray"
              }
            />
          </TouchableOpacity>
          {/*-----------------------------------------------BOTON PARA COMENTARIOS-------------------------------------------------*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Comentarios", {
                postId: post.id,
                userId: post.userId,
              })
            }
          >
            <Ionicons name="chatbubble-outline" size={29} color="gray" />
          </TouchableOpacity>
        </View>
        {/*------------------------------------------------------BOTON PARA GUARDAR-------------------------------------------------*/}

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <FontAwesome
            name={saved ? "star" : "star-o"}
            size={30}
            color={saved ? "#ffd700" : "gray"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.likesText}>{data?.length} Me gusta</Text>
      </View>

      {/*----------------------- Ventana emergente del menú ------------------*/}
      <Modal visible={isPopupVisible} transparent={true}>
        <TouchableOpacity
          style={styles.popupModal}
          onPress={handlePopup}
          activeOpacity={1}
        >
          <View style={styles.popupMenu}>
            {post.userId === userInfo.id ? (
              <TouchableOpacity
                style={styles.popupMenuItem}
                onPress={toggleEditModal}
              >
                <Text style={styles.popupMenuText}>Modificar</Text>
              </TouchableOpacity>
            ) : null}
            {post.userId === userInfo.id ? (
              <TouchableOpacity
                style={styles.popupMenuItem}
                onPress={handleDelete}
              >
                <Text style={styles.popupMenuText}>Eliminar</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.popupMenuItem}
                //   onPress={() => handleDelete(post.id)}
              >
                <Text style={styles.popupMenuText}>Ocultar</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.popupMenuItem}
              onPress={handlePopup}
            >
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
          <Image source={{ uri: post.img }} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="slide" // Puedes ajustar la animación según tus necesidades
        onRequestClose={() => toggleEditModal()} // Cierra el modal cuando se toca fuera de él o se presiona el botón de cierre
      >
        <View style={styles.editModalContainer}>
          <View style={styles.editModalContent}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PerfilUsuario", { userId: post.userId })
              }
            >
              <Image source={{ uri: post.profilepic }} style={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PerfilUsuario", { userId: post.userId })
                }
              >
                <Text style={styles.username}>{post.name}</Text>
              </TouchableOpacity>
            </View>
            {/* Imagen del post */}
            <Image source={{ uri: post.img }} style={styles.editModalImage} />
          <View style={styles.inputEdit}>
          <TextInput
              multiline
              placeholder="Editar tu titulo..."
              style={styles.editModalTextInput}
              // Aquí debes manejar el valor del texto editado
              value={editTitle}
              onChangeText={(text) => setEditTitle(text)}
              borderBottomWidth={0.7}
              borderColor="#ba6bad"
            />
            <TextInput
              multiline
              numberOfLines={2}
              placeholder="Editar tu descripcion..."
              style={styles.editModalTextInput}
              // Aquí debes manejar el valor del texto editado
              value={editDescription}
              onChangeText={(text) => setEditDescription(text)}
              borderBottomWidth={0.7}
              borderColor="ba6bad"
            />

          </View>
            {/* Textarea para editar el contenido del post */}
           
            <View style={styles.buttonmodal}>
              {/* Botón para guardar los cambios */}
              <TouchableOpacity
                onPress={handleEdit}
               
              >
                <Ionicons name="save" size={20}>
                  Guardar
                </Ionicons>
              </TouchableOpacity>

              {/* Botón para cerrar el modal */}
              <TouchableOpacity
                onPress={toggleEditModal}
                
              >
                <Ionicons name="exit" size={20}>
                  Salir
                </Ionicons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
  buttonmodal:{
    width:"100%",
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  inputEdit:{
    marginTop:5,
    marginBottom:5,
    width:"100%",
   
  },
  editModalTextInput:{

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
  editModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  editModalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  editModalImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  editModalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  editModalDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  editModalCloseButton: {
    fontSize: 16,
    color: "blue",
    marginTop: 20,
  },
  card: {
    // Atributos básicos
    width: "100%",
    height: 100,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 0.5,
    // Estilos del contenedor

    backgroundColor: "#fff",
    padding: 15,

    // Estilos del título
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
    },

    // Estilos de la descripción
    description: {
      fontSize: 16,
      color: "#000",
    },
  },
});

export default PostCard;
