import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

const Gallery = () => {
  const images = [
    require('../../assets/harry.jpeg'),
    require('../../assets/hobbit.jpeg'),
    require('../../assets/instituto.jpeg'),
    require('../../assets/panda.jpg'),
  ];

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Los libros más buscados</Text>
      <FlatList
        data={images}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false} // Agregar esta línea para ocultar la barra de desplazamiento horizontal
        showsVerticalScrollIndicator={false} // Agregar esta línea para ocultar la barra de desplazamiento vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Hacer que el contenedor ocupe todo el espacio disponible
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    width: '100%',
  },
  image: {
    resizeMode:"contain",
    width: 150,
    height: 180,
    borderRadius: 20,
    marginBottom:30,
    marginHorizontal: 10,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Gallery;
