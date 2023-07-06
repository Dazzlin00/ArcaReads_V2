import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const CommentsScreen = () => {
  const [comentarios, setComentarios] = useState([
    { id: '1', username: 'usuario1', comment: '¡Hermosa foto!', reply: '', likes: 0 },
    { id: '2', username: 'usuario2', comment: 'Me encanta', reply: '', likes: 0 },
    { id: '3', username: 'usuario3', comment: '¡Wow! Increíble', reply: '', likes: 0 },
  ]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [mostrarCajaRespuesta, setMostrarCajaRespuesta] = useState(false);
  const [idComentarioRespuesta, setIdComentarioRespuesta] = useState('');

  const agregarComentario = () => {
    if (nuevoComentario.trim() !== '') {
      const comentario = {
        id: Math.random().toString(),
        username: 'usuarioNuevo',
        comment: nuevoComentario,
        reply: '',
        likes: 0,
      };
      setComentarios([...comentarios, comentario]);
      setNuevoComentario('');
    }
  };

  const agregarMeGusta = (id) => {
    const comentarioIndex = comentarios.findIndex(comentario => comentario.id === id);
    if (comentarioIndex !== -1) {
      const comentariosActualizados = [...comentarios];
      comentariosActualizados[comentarioIndex].likes += 1;
      setComentarios(comentariosActualizados);
    }
  };

  const mostrarCajaTextoRespuesta = (id) => {
    setMostrarCajaRespuesta(true);
    setIdComentarioRespuesta(id);
  };

  const agregarRespuesta = () => {
    const comentarioIndex = comentarios.findIndex(comentario => comentario.id === idComentarioRespuesta);
    if (comentarioIndex !== -1) {
      const comentario = comentarios[comentarioIndex];
      const respuesta = `Respuesta a ${comentario.username}: ${nuevoComentario}`;
      const comentariosActualizados = [...comentarios];
      comentariosActualizados[comentarioIndex] = { ...comentario, reply: respuesta };
      setComentarios(comentariosActualizados);
      setNuevoComentario('');
      setMostrarCajaRespuesta(false);
      setIdComentarioRespuesta('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Comentarios</Text>
      </View>
      <FlatList
        data={comentarios}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.comentarioContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.comment}>{item.comment}</Text>
            {item.reply !== '' && <Text style={styles.reply}>{item.reply}</Text>}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.likeButton} onPress={() => agregarMeGusta(item.id)}>
                <Ionicons name="heart" size={24} color="#671067" />
                <Text style={styles.likeCount}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.replyButton} onPress={() => mostrarCajaTextoRespuesta(item.id)}>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Text style={styles.replyButtonText}>Responder</Text>
              </TouchableOpacity>
            </View>
            {mostrarCajaRespuesta && idComentarioRespuesta === item.id && (
              <View style={styles.respuestaContainer}>
                <TextInput
                  style={styles.inputRespuesta}
                  placeholder="Escribe tu respuesta..."
                  value={nuevoComentario}
                  onChangeText={texto => setNuevoComentario(texto)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={agregarRespuesta}>
                  <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Añade un comentario..."
          value={nuevoComentario}
          onChangeText={texto => setNuevoComentario(texto)}
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
    
    backgroundColor: '#4D194D',
    paddingVertical: 16,
    
    marginBottom: 16,
     width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  comentarioContainer: {
    marginBottom: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
    marginTop: 4,
  },
  reply: {
    fontSize: 14,
    marginTop: 4,
    fontStyle: 'italic',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  likeCount: {
    marginLeft: 4,
  },
  replyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyButtonText: {
    marginLeft: 4,
  },
  respuestaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  inputRespuesta: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom:20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
  },
});


export default CommentsScreen

