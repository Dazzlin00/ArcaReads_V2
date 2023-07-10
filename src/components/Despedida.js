import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Despedida = ({onSubmit}) => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/li.jpg")}
        />
      </View>
      <Text style={styles.title}>Gracias Por Haber Formado Parte De Nuestra Familia ArcaReads, Hasta Pronto Elizabeth</Text>
      <Text style={styles.description}>
        Porfavor, Antes de irte Podrias Indicarnos el motivo de tu partida
      </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Comentario"
          value={code}
          onChangeText={setCode}
          maxLength={20}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Desactivar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom:20,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius:50,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#00CED1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4D194D',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Despedida ;