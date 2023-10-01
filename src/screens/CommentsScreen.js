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
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useQuery } from "react-query";
import axios from "react-native-axios";
import { BASE_URL } from "../../config";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "react-query";

const CommentsScreen = ({ id }) => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION

  const route = useRoute();

  //const postId = ; // Obtiene el ID del post pasado como parámetro
  const [postId, setPosId] = useState(route.params.postId);
  const [userId, setUserId] = useState(route.params.userId);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevoComentario2, setNuevoComentario2] = useState("");
  const [datosComent, setDatosComent] = useState("");

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
  };

  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------likes-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//

  const agregarMeGusta = (id) => {
    console.log(id + "ide coment");
    /*const comentarioIndex = comentarios.findIndex(
      (comentario) => comentario.id === id
    );
    if (comentarioIndex !== -1) {
      const comentariosActualizados = [...comentarios];
      const comentario = comentariosActualizados[comentarioIndex];
      if (comentario.likes === 0) {
        comentario.likes = 1; // Dar "me gusta"
      } else {
        comentario.likes = 0; // Quitar "me gusta" (dislike)
      }
      setComentarios(comentariosActualizados);
    }*/
  };

  //------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------ELIMINA-------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  async function EliminarComentario(id) {
    return await axios
      .delete(`${BASE_URL}/comments/deleteComent?id=${id}`)

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

  const handleDelete = (id) => {
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
            EliminarComentario(id);
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
  console.log(postId + "este es el post" + userId);
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
            "loading..."
          ) : (
            <View style={styles.comentarioContainer}>
              {/*COMENTARIO Y nombre del usuario */}
              <Text style={styles.username}>{item.name}</Text>
              <Text style={styles.comment}>{item.desc}</Text>

              {item.reply !== "" && (
                <Text style={styles.reply}>{item.reply}</Text>
              )}
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={() => agregarMeGusta(item.id)}
                >
                  {/* <Ionicons name="heart" size={24} color="#ba6bad" />*/}
                  <Ionicons
                    name={
                      isLoading
                        ? "loading..."
                        : data?.includes(userInfo.id)
                        ? "heart"
                        : "heart-outline"
                    }
                    size={24}
                    color={
                      isLoading
                        ? "loading..."
                        : data?.includes(userInfo.id)
                        ? "#ba6bad"
                        : "gray"
                    }
                  />
                  <Text style={styles.likeCount}>{item.likes}</Text>
                </TouchableOpacity>
                <Text>{item.userId} HOLAAAA</Text>
                {userId === userInfo.id ||( item.userId===userInfo.id  )? (
                  <TouchableOpacity
                    style={styles.popupMenuItem}
                    onPress={() => handleDelete(item.id)}
                  >
                    <Ionicons name="trash-outline" size={22} color="black" />
                  </TouchableOpacity>
                ) : null}
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
});

export default CommentsScreen;
