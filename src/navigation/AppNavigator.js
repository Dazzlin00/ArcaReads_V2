import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { View, Text, StyleSheet } from "react-native";

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

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer style={styles.tab}>

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
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Comentarios"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Messages" component={MessagesScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="CambiarContrasenna" component={CambiarContrasennaScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="CerrarSesion" component={CerrarSesionScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Despedida" component={DespedidaScreen  } options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
  },
  tab:{

    backgroundColor: "red",
  },
});
