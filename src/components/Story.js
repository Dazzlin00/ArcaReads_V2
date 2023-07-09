import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Story = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: '#000',
  },
});

export default Story;