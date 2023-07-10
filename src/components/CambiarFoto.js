import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const CambiarFoto = () => {
  const [imageUri, setImageUri] = useState(null);

  const handlePress = () => {
    // Abrir cámara o galería para seleccionar foto
  };

  const handleSave = () => {
    // Guardar foto seleccionada
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../../assets/li.jpg")}
          style={{width: 300, height: 300, borderRadius: 50, alignSelf: 'center'}}
        />
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4D194D',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    bottom: -20,
    right: -20,
    backgroundColor: '#4D194D',
    borderRadius: 50,
    padding: 22,
  },
});

export default CambiarFoto;