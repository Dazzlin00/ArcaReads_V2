import React, { useState,useContext} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView ,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { BASE_URL } from "../../config";
import axios from "react-native-axios";
import { useMutation, useQueryClient } from "react-query";

const ChangePassword = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const queryClient = useQueryClient();


  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const handleSubmit = () => {}
  const navigation = useNavigation();
  
  
  const datos = {
    password:newPassword,
   };
   async function actualizar() {
     try {
       const response = await axios.put(
         `${BASE_URL}/users/actualizarContra?id=${userInfo.id}`,datos);
 
       if (response.status === 200) {
         Alert.alert("Contraseña Actualizada", "La Contraseña se ha actualizado", [
           { text: "OK", onPress: () => console.log("OK Pressed") },
         ]);
         return response.data;
       } else {
         Alert.alert("Error", "La Contraseña no pudo ser actualizada", [
           { text: "OK", onPress: () => console.log("OK Pressed") },
         ]);
         throw new Error(response.statusText);
       }
     } catch (error) {
       console.log(error);
       throw error;
     }
   }
   const { mutate } = useMutation({
    mutationFn: actualizar,

    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      queryClient.invalidateQueries(["postss"]);
    },
  });

  const handlesave = async () => {
    if (!currentPassword || !newPassword || !repeatPassword) {
      Alert.alert("Error", "Por favor complete todos los campos", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      
      return;
    }
  
    if (newPassword !== repeatPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    mutate({newPassword})
  }

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
        <TouchableOpacity  onPress={handlesave}>
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