import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Field,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

function Search() {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log(`Buscando por: ${searchValue}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar Libro"
          style={styles.searchInput}
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>

      <LinearGradient
        colors={["rgba(238,174,202,0.7)", "rgba(93,135,218,0.9)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.buttonSearchContainer}
      >
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={[styles.searchButtonText]}>Buscar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    margin: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchIcon: {
    fontSize: 16,
    color: "#666",
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#444",
    paddingVertical: 5,
  },
  buttonSearchContainer: {
    borderRadius: 20,
    overflow: "hidden",
    width: 100,
    height: 40,
  },
  searchButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "center",
  },
  icon: {
    marginRight: 6,
  },
  searchButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default Search;
