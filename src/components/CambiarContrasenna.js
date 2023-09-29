import React, { useState,useContext} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";


const ChangePassword = () => {

  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const handleSubmit = () => {}
  const navigation = useNavigation();
  
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
           style={styles.avatar}
           source={{
             uri: userInfo.profilepic 
           }}
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
       
       <LinearGradient
      colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
      style={styles.button}>
        <TouchableOpacity  onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
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
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center',
  },
  avatarContainer: {
    marginTop: 30,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderColor: '#4D194D',
  },
});

export default ChangePassword;