import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useQuery } from "react-query";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "react-query";
import { useNavigation } from "@react-navigation/native";
function formatDateTime(inputDate) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(inputDate).toLocaleDateString(undefined, options);
}
const CommentsScreen = () => {
  const navigation = useNavigation();

  const { userInfo } = useContext(AuthContext); //AUTENTICACION

  const route = useRoute();

  //const postId = ; // Obtiene el ID del post pasado como parámetro
  const [postId, setPosId] = useState(route.params.postId);
  const [userId, setUserId] = useState(route.params.userId);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevoComentario2, setNuevoComentario2] = useState("");
  const [datosComent, setDatosComent] = useState("");
  const [likedComments, setLikedComments] = useState([]);

  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------MUESTRA LOS COMENTARIOS---------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/comments/getComments?postId=${postId}`
      );
      setDatosComent(response);
      console.log(response.data);
      return response.data;
    },
  });
  const [comentarios, setComentarios] = useState(data);

  const queryClient = useQueryClient();

  //------------------------------------------------------------------------------------------------------------//
  //------------------------------------AGREGAR COMENTARIO-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const { mutate } = useMutation({
    mutationFn: compartir,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });
  const datos = {
    desc: nuevoComentario2,
    postId,
  };
  function compartir() {
    return axios
      .post(`${BASE_URL}/comments/addComments`, datos)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  const agregarComentario = () => {
    mutate({ nuevoComentario2, postId });
    setNuevoComentario2("");
  };

  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------likes-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
 
 
 
 
  const toggleLike = async(commentId,user) => {
    if (likedComments.includes(commentId)) {
      // El usuario ya ha dado "like", quitar el "like"
      const updatedLikes = likedComments.filter((id) => id !== commentId);
      setLikedComments(updatedLikes);
    } else {
      // El usuario no ha dado "like", agregar el "like"
      const updatedLikes = [...likedComments, commentId];
      setLikedComments(updatedLikes);
    }
    console.log(commentId+"hola"+user)
  };
  
  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------ELIMINA-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  async function EliminarComentario(comentid) {
    return await axios
      .delete(`${BASE_URL}/comments/deleteComent?id=${comentid}`)

      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Comentario eliminado", "El comentario se ha eliminado", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          Alert.alert("Error", "El comentario no pudo ser eliminado", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
        queryClient.refetchQueries("comments");
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  const handleDelete = (comentid) => {
    Alert.alert(
      "Eliminar Comentario",
      "¿Está seguro de que desea eliminar este comentario?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            EliminarComentario(comentid);
          },

          style: "destructive",
        },
      ]
    );
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Comentarios</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          error ? (
            "error"
          ) : isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <View style={styles.comentarioContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/*-----------------------------------------BOTON QUE PERMITE IR AL PERFIL DE USUARIOS-------------------------------------------------*/}

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PerfilUsuario", {
                      userId: item.userId,
                    })
                  }
                >
                  <Image
                    source={{ uri: item.profilepic }}
                    style={styles.avatar}
                  />
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("PerfilUsuario", {
                        userId: item.userId,
                      })
                    }
                  >
                    <Text style={styles.username}>{item.name}</Text>
                  </TouchableOpacity>
                  <Text style={styles.timestamp}>{formatDateTime(item.createdAt)}</Text>

                </View>
              </View>

              {item.reply !== "" && (
                <Text style={styles.reply}>{item.reply}</Text>
              )}
              <Text>{item.desc}</Text>
              <View style={styles.commentContainer}>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={() => toggleLike(item.id,item.userId)} 
                  style={styles.popupMenuItem}>
                    <Ionicons
                      name={
                        likedComments.includes(item.id)
                          ? "heart"
                          : "heart-outline"
                      }
                      size={24}
                      color={likedComments.includes(item.id) ? "#ba6bad" : "gray"}
                    />
                  </TouchableOpacity>

                  {userId === userInfo.id || item.userId === userInfo.id ? (
                    <TouchableOpacity
                      style={styles.popupMenuItem}
                      onPress={() => handleDelete(item.id)}
                    >
                      <Ionicons name="trash-outline" size={22} color="black" />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          )
        }
      />
      {/*------------------------------------------RESPUESTA------------------------------------------------------------- */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Añade un comentario..."
          value={nuevoComentario2}
          //  onChangeText={() => setNuevoComentario2()}
          onChangeText={setNuevoComentario2}
        />
        <TouchableOpacity style={styles.sendButton} onPress={agregarComentario}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffff",
    paddingVertical: 16,

    marginBottom: 16,
    width: "100%",
  },
  headerText: {
    color: "#4D194D",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  comentarioContainer: {
    marginBottom: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  comment: {
    fontSize: 14,
    marginTop: 4,
  },
  reply: {
    fontSize: 14,
    marginTop: 4,
    fontStyle: "italic",
  },
  buttonsContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    marginTop: 8,
  },
  likeButton: {
    // flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  likeCount: {
    marginLeft: 4,
  },
  replyButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  replyButtonText: {
    marginLeft: 4,
  },
  respuestaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  inputRespuesta: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#ba6bad",
    padding: 8,
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 8,
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
});

export default CommentsScreen;
