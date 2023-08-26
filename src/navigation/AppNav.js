import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

import AppNavigator from "./AppNavigator";
import { View, ActivityIndicator } from "react-native";

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  // {userToken !== null ? <IniScreen /> :<AppNavigator /> }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
