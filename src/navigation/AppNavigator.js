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
<<<<<<< HEAD
import ButtonsProfile from "../components/ButtonsProfile";
import SeguidoresScreen from "../screens/SeguidoresScreen";
=======
>>>>>>> 937d847fc1d9d5e203382d3dd54155ec8ef960b9

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator style={styles.container}>
       
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Comentarios"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuarioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CambiarContrasenna"
          component={CambiarContrasennaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CerrarSesion"
          component={CerrarSesionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Despedida"
          component={DespedidaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CambiarFoto"
          component={CambiarFotoSreen}
          options={{ headerShown: false }}
        />
      
<<<<<<< HEAD
         <Stack.Screen
          name="Botones"
          component={ButtonsProfile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SeguidoresScreen"
          component={SeguidoresScreen}
          options={{ headerShown: false }}
        />


=======
         
>>>>>>> 937d847fc1d9d5e203382d3dd54155ec8ef960b9
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
