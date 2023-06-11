import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  TextInput,
} from "react-native";

export default function Post({ post, onLike, onDislike }) {
  const [comment, setComment] = useState("");

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Mira este post: ${post.title} - ${post.content}`,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleComment = () => {
    // Aquí puedes agregar la lógica para guardar el comentario en la base de datos o en el estado de la aplicación.
    console.log(comment);
    setComment("");
  };
  return (
    <View>
      <Image source={{ uri: post.image }} style={{ width: 200, height: 200 }} />
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={onLike}>
          <Text>Like ({post.likes})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDislike}>
          <Text>Dislike ({post.dislikes})</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare}>
          <Text>Compartir</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Escribe un comentario..."
          value={comment}
          onChangeText={(text) => setComment(text)}
          onSubmitEditing={handleComment}
        />
      </View>
    </View>
  );
}
