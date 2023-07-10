import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import EditarPerfil from '../components/EditarPerfil';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function EditarPerfilScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logoblanco.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.notificationButton}>
          <Ionicons name="settings-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <EditarPerfil />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    height: 60,
    backgroundColor: '#4D194D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  notificationButton: {
    marginRight: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
});