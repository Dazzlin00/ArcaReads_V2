import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import moment from 'moment';
import 'moment/locale/es';

import { Ionicons } from 'react-native-vector-icons';

const HomeScreen = () => {
  moment.locale('es');

  const formatDate = (date) => {
    return moment(date).format('D [de] MMMM YYYY');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header }>
        <Image source={require('../../assets/logoblanco.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView >
        <Card
          username="Elizabeth Gomez"
          date={formatDate('2022-01-01')}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nisl. Proin commodo justo eu lectus venenatis, ac dapibus enim sodales."
          profileImage={require('../../assets/eli.jpg')}
          postImage={require('../../assets/panda.jpg')}
        />
        {/*  más tarjetas de publicaciones aquí */}
        <Card
          username="Eliza Graterol"
          date={formatDate('2022-01-02')}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nisl. Proin commodo justo eu lectus venenatis, ac dapibus enim sodales."
          profileImage={require('../../assets/eliza.jpg')}
          postImage={require('../../assets/panda.jpg')}
        />
        <Card
          username="John Doe"
          date={formatDate('2022-01-03')}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat nisl. Proin commodo justo eu lectus venenatis, ac dapibus enim sodales."
          profileImage={require('../../assets/logo.png')}
          postImage={require('../../assets/panda.jpg')}
        />
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

export default HomeScreen;