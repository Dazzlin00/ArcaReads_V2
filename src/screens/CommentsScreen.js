import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const CommentsScreen = () => {
  const [comentarios, setComentarios] = useState([
    { id: '1', username: 'Jesus Lopez', comment: '¡Hermosa foto!', reply: '', likes: 0 },
    { id: '2', username: 'Maria Jimenez', comment: 'Me encanta', reply: '', likes: 0 },
    { id: '3', username: 'Laura Perdomo', comment: '¡Wow! Increíble', reply: '', likes: 0 },
  ]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [nuevoComentario2, setNuevoComentario2] = useState('');

  const [mostrarCajaRespuesta, setMostrarCajaRespuesta] = useState(false);
  const [idComentarioRespuesta, setIdComentarioRespuesta] = useState('');

  const agregarComentario = () => {
    if (nuevoComentario2.trim() !== '') {
      const comentario = {
        id: Math.random().toString(),
        username: 'Elizabeth Gomez',
        comment: nuevoComentario2,
        reply: '',
        likes: 0,
      };
      setComentarios([...comentarios, comentario]);
      setNuevoComentario2('');
    }
  };

  const agregarMeGusta = (id) => {
    const comentarioIndex = comentarios.findIndex(comentario => comentario.id === id);
    if (comentarioIndex !== -1) {
      const comentariosActualizados = [...comentarios];
      const comentario = comentariosActualizados[comentarioIndex];
      if (comentario.likes === 0) {
        comentario.likes = 1; // Dar "me gusta"
      } else {
        comentario.likes = 0; // Quitar "me gusta" (dislike)
      }
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
      const respuesta = ` ${comentario.username}: ${nuevoComentario}`;
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
                <Ionicons name="heart" size={24} color="#ba6bad" />
                <Text style={styles.likeCount}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.replyButton} onPress={() => mostrarCajaTextoRespuesta(item.id)}>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Text style={styles.replyButtonText}>Responder</Text>
              </TouchableOpacity>
            </View>
            {/*------------------------------------------RESPUESTA------------------------------------------------------------- */}
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
          value={nuevoComentario2}
          onChangeText={texto => setNuevoComentario2(texto)}
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
    
    backgroundColor: '#ffff',
    paddingVertical: 16,
    
    marginBottom: 16,
     width: '100%',
  },
  headerText: {
    color: '#4D194D',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
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
flexDirection: "row",
    justifyContent: 'space-between',    marginTop: 8,
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
    backgroundColor: '#ba6bad',
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

});


export default CommentsScreen

