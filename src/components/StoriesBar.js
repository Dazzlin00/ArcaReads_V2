import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Story from './Story';

const StoriesBar = () => {
  const [stories, setStories] = useState([
    { id: 1, image: require("../../assets/fondo2.jpg"), title: 'Historia 1' },
    { id: 2, image: require("../../assets/fondo3.png"), title: 'Historia 2' },
    { id: 3, image: require("../../assets/fondo4.jpg"), title: 'Historia 3' },
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
        <View style={styles.storiesContainer}>
          {stories.map((story) => (
            <TouchableOpacity key={story.id} style={styles.story} onPress={() => console.log(story.title)}>
              <Story image={story.image} title={story.title} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'red',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    
    
  },
  addStoryButton: {
    marginTop:30,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    marginLeft:23,
  },
  addStoryIcon: {
   
    width: 30,
    height: 30,
  },
  storiesContainer: {
    marginTop:30,
    flexDirection: 'row',
    marginRight: 20,
    flex: 1,
  },
  story: {
   
    marginRight: 3,
    width: 80,
    height: 100,
  },
});

export default StoriesBar;