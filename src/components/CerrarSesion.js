import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default CerrarSesion = () => {
  
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext); //AUTENTICACION

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/A.png')}
      />
      <Text style={styles.title}>Hasta Pronto querido Usuario ,                         Te estaremos Esperando con el Mejor Contenido </Text>
      <Text style={styles.description}>
      "El amor por los libros es algo así como el amor romántico. Cuando se lee realmente un buen libro, las cargas y preocupaciones parecen ser más pequeñas". (Steve Leveen)
      </Text>
     
      <LinearGradient colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]} style={[styles.buttonContainer, styles.loginButton]}>
      <TouchableOpacity  onPress={() => logout()}>
        <Text style={styles.buttonText}>Cerrar Sesion</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 22,
    color: '#4D194D',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#4D194D',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
})

       