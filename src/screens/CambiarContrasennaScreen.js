import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import CambiarContrasenna from '../components/CambiarContrasenna';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, FlatList,SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CambiarContrasennaScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      
    <LinearGradient
      colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.logocontainer}
    >
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../assets/logoblanco.png")}
          style={styles.imagelogo}
        />
      </View>
      
    </LinearGradient>


    <CambiarContrasenna/>
    

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 20,

    
    backgroundColor: "white",
  },
  logocontainer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: {
    width: 160,
  },
  imagelogo: {
    resizeMode: "contain",
    margin: 20,

    width: "100%",
    height: "100%",
  },
 
  notificationButton: {
    marginRight: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
});