import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const PostList = () => {
  const data = [
    {
      id: '1',
      image: require('../../assets/libro1.jpg'),
      title: 'Barbie',
      subtitle: 'Feline friend'
    },
    {
      id: '2',
      image: require('../../assets/libro2.jpg'),
      title: 'Naruto',
      subtitle: 'Natural wonder'
    },
    {
      id: '3',
      image: require('../../assets/libro3.jpg'),
      title: 'A solas',
      subtitle: 'Yum!'
    },
    {
      id: '4',
      image: require('../../assets/libro4.jpg'),
      title: 'Ejercicio',
      subtitle: 'Paradise'
    },
    {
      id: '5',
      image: require('../../assets/libro5.jpg'),
      title: 'Muerte',
      subtitle: 'Rock on!'
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:  'column' 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PostList;