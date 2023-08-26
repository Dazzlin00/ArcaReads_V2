import React, { useContext } from "react";
import AppNavigator from "./AppNavigator";
import { AuthContext } from "../../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import IniScreen from "../screens/iniScreen";

function AppStack() {
  const { userToken } = useContext(AuthContext);
  // {userToken !== null ? <IniScreen /> :<AppNavigator /> }
  return (
    <NavigationContainer>
      <AppNavigator /> 
    </NavigationContainer>
  );
}

export default AppStack;
