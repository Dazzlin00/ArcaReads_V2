import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";
import { util } from "react-native";
import { BASE_URL } from "../../config";
import axios from "react-native-axios";
import { useMutation, useQueryClient } from "react-query";

const AddPostForm = ({ onSubmit }) => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const [showForm, setShowForm] = useState(false); // Estado para controlar si mostrar el formulario
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImage] = useState(null);
  const [avatar, setAvatar] = useState(userInfo.profilepic); // Nombre de usuario predeterminado
  const [name, setName] = useState(""); // Nombre de usuario predeterminado


  const handleChooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm); // Cambiar el estado de mostrar/ocultar el formulario
  };

   //------------------------------------------------------------------------------------------------------------//
  //--------------------------------------PETICION QUE AGREGA POST NUEVOS---------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  const queryClient = useQueryClient();
  const { mutate, error, isLoading } = useMutation( {
    mutationFn: compartir,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      queryClient.invalidateQueries(["postss"]);
    },
  });

  function compartir(post) {
    return axios
      .post(`${BASE_URL}/posts/addPost`, post)
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

  const handleSubmit = () => {
    
    mutate({ title, desc, img });
    
    
    setTitle("");
    setDesc("");
    setImage(null);
    
  };

  useEffect(() => {
    setName(userInfo.name); // Actualizar el estado con el nombre de usuario
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleToggleForm}>
        <Text style={styles.addButtonText}>Publicar</Text>
      </TouchableOpacity>
      {showForm && (
        <View>
          <View style={styles.header}>
            <Image style={styles.avatar} source={{ uri: avatar }} />

            <Text style={styles.username}>{name}</Text>

            <TouchableOpacity
              style={styles.attachButton}
              onPress={handleChooseImage}
            >
              <Ionicons name="attach-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          {img && <Image source={{ uri: img }} style={styles.image} />}
          <TextInput
            style={styles.title}
            value={title}
            onChangeText={setTitle}
            placeholder="Titulo del libro"
            maxLength={39}
            multiline={true}
            numberOfLines={1}
          />
          <TextInput
            style={styles.input}
            value={desc}
            onChangeText={setDesc}
            placeholder="¡Danos tu opinion!"
            maxLength={141}
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.footer}>
            <LinearGradient
              colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonSearchContainer}
            >
              <TouchableOpacity
                style={styles.footerButton}
                onPress={handleSubmit}
              >
                <Ionicons
                  name="paper-plane-outline"
                  size={24}
                  color="white"
                  style={styles.icon}
                />
                <Text style={styles.buttonText}>Compartir</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,

    margin: 22,
    elevation: 1.2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 20,
  },
  buttonSearchContainer: { flex: 1, borderRadius: 10 },
  attachButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 5,
  },
  username: {
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 80,
  },
  title: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 5,

    marginBottom: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(6,18,38,0.2)",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 6,
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 42,

    backgroundColor: "rgba(6,18,38,0.2)",
    borderRadius: 10,
    width: "100%",
  },
  footerButtonText: {
    color: "white",
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
  },
});

export default AddPostForm;
