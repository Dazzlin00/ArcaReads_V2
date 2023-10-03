
import React, { useState,useContext } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";
import { ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useQuery } from "react-query";
import { BASE_URL } from "../../config";
import axios from "react-native-axios";
import { useMutation, useQueryClient } from "react-query";
const EditProfileView = () => {
  const { userInfo } = useContext(AuthContext); //AUTENTICACION
  const queryClient = useQueryClient();

  const [name2, setName2] = useState(userInfo.username);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(userInfo.profilepic);

  const navigation = useNavigation();


  const datos = {
   username:name2,
   email:email,
   name:name
  };
  async function actualizar() {
    try {
      const response = await axios.put(
        `${BASE_URL}/users/actualizarDatos?id=${userInfo.id}`,datos);

      if (response.status === 200) {
        Alert.alert("Informacion Actualizada", "La Informacion se ha actualizado", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        return response.data;
      } else {
        Alert.alert("Error", "La Informacion no pudo ser actualizada", [
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

    mutate({name2,email,name})
  }
  return (
    <ScrollView>
   <View style={styles.container}>
      <View style={styles.avatarContainer}>
        
          <Text style={styles.changeAvatarButtonText}>Información Personal</Text>
      
      </View>
      <View style={styles.form}>
      
      <Text style={styles.label}>Nombre de Usuario </Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el Nombre de Usuario"
          value={name2}
          onChangeText={(text) =>setName2(text)}
        />
        
        <Text style={styles.label}>Nombre y Apellido </Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el Nombre y Apellido"
          value={name}
          onChangeText={(text) =>setName(text)}
        />
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el correo"
          value={email}
          onChangeText={(text) =>setEmail(text)}
        />
      
       
       
       <LinearGradient colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]} style={styles.button}>
       <TouchableOpacity  onPress={handlesave}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
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
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
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
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 44,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: '#4D194D',
    fontSize: 25,
  },
});

export default EditProfileView;
