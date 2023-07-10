import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default CerrarSesion = () => {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/A.png')}
      />
      <Text style={styles.title}>Hasta Pronto Elizabeth, Te estaremos Esperando con el Mejor Contenido </Text>
      <Text style={styles.description}>
      El amor por los libros es algo así como el amor romántico. Cuando se lee realmente un buen libro, las cargas y preocupaciones parecen ser más pequeñas. (Steve Leveen)
      </Text>
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Cerrar Sesion</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: '#5F6D7A',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
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

       