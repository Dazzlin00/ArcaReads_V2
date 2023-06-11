import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function CommentsScreen({ route }) {
  const [comments, setComments] = useState(route.params.comments);
  const [newComment, setNewComment] = useState('');

  const handleComment = () => {
    // Aquí puedes agregar la lógica para guardar el comentario en la base de datos o en el estado de la aplicación.
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <View>
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <TextInput
        placeholder="Escribe un comentario..."
        value={newComment}
        onChangeText={(text) => setNewComment(text)}
        onSubmitEditing={handleComment}
      />
      <TouchableOpacity onPress={handleComment}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}