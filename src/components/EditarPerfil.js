
import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";
import { ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const EditProfileView = () => {
  const profile = {
    name2: 'Jane Doe',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Software engineer and cat lover',
    avatar: 'https://example.com/jane-doe-avatar.png',
  }
  const [name2, setName2] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(profile.avatar);

  const navigation = useNavigation();
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
          onChangeText={setName2}
        />
        
        <Text style={styles.label}>Nombre y Apellido </Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el Nombre y Apellido"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el correo"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Telefono</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el telefono"
          value={bio}
          onChangeText={setBio}
        />
       
       <LinearGradient colors={["rgba(238,174,202,0.4)", "rgba(93,135,218,0.7)"]} style={styles.button}>
       <TouchableOpacity  onPress={() => navigation.navigate('Settings')}>
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
