import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      id: "1",
      image: require("../../assets/piano.jpg"),
      title: "Piano",
      subtitle: "El arte del Sonido",
    },
    {
      id: "2",
      image: require("../../assets/prog.jpg"),
      title: "Programacion",
      subtitle: "La vida es binaria",
    },
    {
      id: "3",
      image: require("../../assets/granja.jpg"),
      title: "Animales",
      subtitle: "Cositas Bonitas",
    },
    {
      id: "4",
      image: require("../../assets/belle.jpg"),
      title: "Belleza",
      subtitle: "Cuidemonos",
    },
    {
      id: "5",
      image: require("../../assets/mates.jpg"),
      title: "Matematica",
      subtitle: " 1+1 no siempre es 2",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          onPress={() => setSelectedImage(item)}
          style={styles.touchable}
        >
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <Modal visible={selectedImage !== null} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
          <Image source={selectedImage?.image} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{selectedImage?.title}</Text>
          <Text style={styles.modalSubtitle}>{selectedImage?.subtitle}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  touchableContainer: {
    width: "50%", // Make each item take half of the screen width
    padding: 10, // Add padding to increase the touchable area
  },
  touchable: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fafafa",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    marginTop: 20,
  },
  modalSubtitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
});

export default Galeria;