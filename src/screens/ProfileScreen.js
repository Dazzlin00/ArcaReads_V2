import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import Profile from '../components/Profile';


import { View, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header }>
        <Image source={require('../../assets/logoblanco.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="settings-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View>
      <Profile />
     </View>
     

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20 ,
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
