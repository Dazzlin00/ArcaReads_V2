import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import { View, Text, StyleSheet } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (


    <Tab.Navigator
      tabBarStyle={{  height: 60, position: "absolute", bottom: 0,borderTopWidth: 1,
      borderTopColor: "black", }}
      tabBarOptions={{
        activeTintColor: "#ba6bad",
        inactiveTintColor: "gray",
        activeBackgroundColor: "white",
        inactiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
 
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
          headerShown: false,
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
