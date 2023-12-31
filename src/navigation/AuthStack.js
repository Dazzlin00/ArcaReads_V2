import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import CommentsScreen from "../screens/CommentsScreen";
import iniScreen from "../screens/iniScreen";

import SettingsScreen from "../screens/SettingsScreen";
import EditarPerfilScreen from "../screens/EditarPerfilScreen";
import CambiarContrasennaScreen from "../screens/CambiarContrasennaScreen";
import CerrarSesionScreen from "../screens/CerrarSesionScreen";
import DespedidaScreen from "../screens/DespedidaScreen";
import CambiarFotoSreen from "../screens/CambiarFotoScreen";
import PerfilUsuarioScreen from "../screens/PerfilUsuarioScreen";
import SeguidoresScreen from "../screens/SeguidoresScreen";
import SeguidosScreen from "../screens/SeguidosScreen";
import Usuarios from "../screens/UsuariosScreen";
import SeguidoresPerfilUsuarioScreen from "../screens/SeguidoresPerfilUsuarioScreen";
import SeguidosPerfilUsuarioScreen from "../screens/SeguidosPerfilUsuarioScreen";
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Ini"
          component={iniScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "red",
      padding: 10,
    },
    tab: {
      backgroundColor: "red",
    },
  });