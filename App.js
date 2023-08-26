import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./context/AuthContext"; //Autenticacion
import AppNav from "./src/navigation/AppNav";
//import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
