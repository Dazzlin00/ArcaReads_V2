import React, { useState } from 'react';
import { View, Text, FlatList,Button } from 'react-native';
import Post from '../components/Post';
import Inicio from '../components/Home';

const posts = [
  {
    id: 1,
    title: 'Post 1',
    image: 'https://picsum.photos/id/1/200/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: 10,
    dislikes: 2,
  },
  {
    id: 2,
    title: 'Post 2',
    image: 'https://picsum.photos/id/2/200/200',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    likes: 5,
    dislikes: 1,
  },
  {
    id: 3,
    title: 'Post 3',
    image: 'https://picsum.photos/id/3/200/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    likes: 8,
    dislikes: 3,
  },
];

export default function HomeScreen() {
  const [postList, setPostList] = useState(posts);

  const handleLike = (postId) => {
    const updatedPosts = postList.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      } else {
        return post;
      }
    });
    setPostList(updatedPosts);
  };

  const handleDislike = (postId) => {
    const updatedPosts = postList.map((post) => {
      if (post.id === postId) {
        return { ...post, dislikes: post.dislikes + 1 };
      } else {
        return post;
      }
    });
    setPostList(updatedPosts);
  };
  const handlePress = () => {
    sendPushNotification();
  };
  return (
    <View>
      <Inicio />
      <Text>Lista de posts</Text>
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} onLike={() => handleLike(item.id)} onDislike={() => handleDislike(item.id)} />
        )}
      />
      <Button title="Enviar notificación" onPress={handlePress} />
    </View>
  );
}