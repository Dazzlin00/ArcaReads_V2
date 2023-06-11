import React from 'react';
import { View } from 'react-native';
import Login from '../components/Login';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );

}



