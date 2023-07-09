import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MasonryList from 'react-native-masonry-list';

const ImageGallery = () => {

  const navigation = useNavigation();

  const data = [
    { uri: require('../../assets/libro1.jpg'), dimensions: { width: 400, height: 600 } },
    { uri: require('../../assets/libro2.jpg'), dimensions: { width: 300, height: 400 } },
    { uri: require('../../assets/libro3.jpg'), dimensions: { width: 600, height: 400 } },
    { uri: require('../../assets/libro4.jpg'), dimensions: { width: 200, height: 300 } },
    { uri: require('../../assets/libro5.jpg'), dimensions: { width: 400, height: 400 } },
    { uri: require('../../assets/libro6.jpg'), dimensions: { width: 500, height: 300 } },
  ];

  return (
    <View style={styles.container}>
      <MasonryList
        images={data}
        columns={2}
        imageContainerStyle={styles.imageContainer}
        customImageComponent={CustomImage}
      />
    </View>
  );
};

const CustomImage = ({ image, style, resizeMode }) => {
  return (
    <Image
      source={{ uri: image.uri }}
      style={[style, { resizeMode: resizeMode }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ImageGallery;