import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Field,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from "react-native-vector-icons";

function Add() {
  const navigation = useNavigation();




  return (
    <View style={styles.container}>
  <Text >hOLA DESDE COMPONENT Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Add;