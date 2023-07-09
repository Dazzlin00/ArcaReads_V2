import React, { useState } from "react";
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

const AddPostForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(require("../../assets/fondo14.jpg")); // Nombre de usuario predeterminado

  const [username, setUsername] = useState("Eliza Graterol"); // Nombre de usuario predeterminado
  const [timestamp, setTimestamp] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );
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

  const handleSubmit = () => {
    onSubmit({
      text,
      image,
      avatar,
      username,
      timestamp,
    });
    setText("");
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />

        <Text style={styles.username}>{username}</Text>

        <TouchableOpacity
          style={styles.attachButton}
          onPress={handleChooseImage}
        >
          <Ionicons name="attach-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="What's on your mind?"
        maxLength={141}
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={handleSubmit}>
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 10,
    margin: 22,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
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
  attachButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
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
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 80,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',

    backgroundColor: "rgba(6,18,38,0.2)",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 6,
  },
  footerButtonText: {
    color: "white",
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default AddPostForm;
