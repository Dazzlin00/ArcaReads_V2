import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,Button
  } from "react-native";
export default function ButtonsProfile() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       justifyContent:'center',
       alignItems:'center'
    },

  });

