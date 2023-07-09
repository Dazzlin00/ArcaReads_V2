import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Story from './Story';

const StoriesBar = () => {
  const [stories, setStories] = useState([
    { id: 1, image: require("../../assets/fondo2.jpg"), title: 'Historia 1' },
    { id: 2, image: require("../../assets/fondo3.png"), title: 'Historia 2' },
    { id: 3, image: require("../../assets/fondo4.jpg"), title: 'Historia 3' },
    { id: 4, image: require("../../assets/fondo6.jpg"), title: 'Historia 4' },
    { id: 5, image: require("../../assets/fondo7.jpg"), title: 'Historia 5' },
  ]);

  const addStory = (image, title) => {
    const newStory = {
      id: stories.length + 1,
      image,
      title,
    };
    setStories([...stories, newStory]);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Agrega un botón "+" para agregar una nueva historia */}
        <TouchableOpacity style={styles.addStoryButton} onPress={() => addStory(require('../../assets/AB.png'), 'Nueva Historia')}>
          <Image source={require('../../assets/AB.png')} style={styles.addStoryIcon} />
        </TouchableOpacity>
        {stories.map((story) => (
          <Story key={story.id} image={story.image} title={story.title} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",

    width:'100%',

  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  },
  addStoryButton: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  addStoryIcon: {
    width: 30,
    height: 30,
  },
});

export default StoriesBar;