import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const handleSubmit = () => {

  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/li.jpg")}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Contraseña Actual</Text>
        <TextInput
          style={styles.input}
          placeholder=" Ingrese su Contraseña Actual"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Nueva Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la Nueva Contraseña"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Repita la Nueva Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Repita la Nueva Contraseña"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
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
    backgroundColor:'#fff',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    marginBottom:5
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
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
    textAlign:'center',
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#4D194D',
  },
});

export default ChangePassword;