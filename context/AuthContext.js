import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import axios from "react-native-axios/lib/axios";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  const login = (email, password) => {
    setIsLoading(true);
  
    axios
      .post(`${BASE_URL}/auth/getAccessToken`, {
        email,
        password,
      })

      .then((res) => {
        //INFORMACION DEL USUARIO
        let userInfo = res.data;
        setUserInfo(userInfo);
        //TOKEN
        const token = userInfo.token;
        setUserToken(token);
        console.log(token);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo)); // Almacenar el token en AsyncStorage
        console.log(userInfo);
        AsyncStorage.setItem("accessToken", token); // Almacenar el token en AsyncStorage
      })

      .catch((e) => {
        
        console.log(`Error al logearse ${e}`);
        setError("El email o la contraseña son incorrectos");
      });
     
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");

    AsyncStorage.removeItem("accessToken");
    setIsLoading(false);
  };

  const isLoggetIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("accessToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    isLoggetIn();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("")
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        isLoggetIn,
        userInfo,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
