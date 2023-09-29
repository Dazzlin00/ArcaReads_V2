import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const Despedida = ({onSubmit}) => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();
  return (
   <ScrollView>
   <View style={styles.container}>
      
      <Image
        style={styles.icon}
        source={require('../../assets/A.png')}
      />

      <Text style={styles.title}>Gracias Por Haber Formado                                     Parte De Nuestra Familia ArcaReads,                 Hasta Pronto </Text>
      <Text style={styles.description}>
                                                                            
      </Text>

      <Text style={styles.description}>
        Porfavor, Antes de irte:                                                                          ¿Podrias Indicarnos el motivo de tu partida?
      </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Motivo"
          value={code}
          onChangeText={setCode}
          maxLength={20}
        />
       
       <LinearGradient colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]} style={[styles.button]}>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Desactivar</Text>
        </TouchableOpacity>
        </LinearGradient>
      
      </View>


    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 22,
    color: '#4D194D',
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

  icon: {
    width: 120,
    height: 120,
  },
});

export default Despedida ;