import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import { View, Text, StyleSheet } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#4D194D',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#1B3A4A',
        inactiveBackgroundColor: '#1B3A4A',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensajes"
        component={MessagesScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
  },
  footer: {
    backgroundColor: "#1B3A4A",
    height: 60,
    width: "100%",
    marginTop: 20,
  }
});
