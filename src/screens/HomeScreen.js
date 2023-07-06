import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import { Ionicons } from 'react-native-vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <View style={styles.header}>
          <Image source={require('../../assets/logoblanco.png')} style={styles.logo} resizeMode="contain" />
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Card
          username="Elizabeth Gomez"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nisl. Proin commodo justo eu lectus venenatis, ac dapibus enim sodales."
          profileImage={require('../../assets/logo.png')}
          postImage={require('../../assets/panda.jpg')}
        />
        {/*  más tarjetas de publicaciones aquí */
        <Card
          username="Eliza Graterol"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nisl. Proin commodo justo eu lectus venenatis, ac dapibus enim sodales."
          profileImage={require('../../assets/logo.png')}
          postImage={require('../../assets/panda.jpg')}
        />
        }
        {
          <Card
            username="John Doe"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nisl. Proin commodo justo eu lectus venenatis, ac dapibus enim sodales."
            profileImage={require('../../assets/logo.png')}
            postImage={require('../../assets/panda.jpg')}
          />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    
    height: 50,
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

export default HomeScreen;