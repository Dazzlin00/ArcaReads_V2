import React, { useState } from 'react';
import { View, Text, FlatList,Button } from 'react-native';
import Post from '../components/Post';

const posts = [
  {
    id: 1,
    title: 'Post 1',
    name: 'Kaladin Sanderson',
    createdAt: 'September 16, 2023',
    avatar: 'https://scontent.fbrm1-1.fna.fbcdn.net/v/t39.30808-6/278924392_5149441235078544_4418800854132458724_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Aa-5MJ7_Ae0AX_17XXS&_nc_ht=scontent.fbrm1-1.fna&oh=00_AfAzDR74DTan69RQJplHglFSSx-ipPaTTYho9peQQzEWfw&oe=649FFA50',
    image: 'https://th.bing.com/th/id/OIP.DpPte76sF97HIyOUjvWGAAHaFv?pid=ImgDet&rs=1',
    content: '"Puedes tomar el control de mi mente y mi cuerpo, pero hay una cosa que un Saiyajin siempre guarda ... ¡su ORGULLO!"',
    likes: 10,
    commnents: 2,
  },
  {
    id: 2,
    title: 'Post 2',
    name: 'Elizabeth Gomez',
    avatar: 'https://th.bing.com/th/id/OIP.tMW1EYoheuu537IDWfBVdAHaHa?pid=ImgDet&rs=1',
    createdAt: 'September 15, 2023',
    image: 'https://picsum.photos/id/2/200/200',
    content: '"Si piensas que los usuarios de tus programas son idiotas, sólo los idiotas usarán tus programas.- Linus Torvalds"',
    likes: 5,
    commnents: 1,
  },
  {
    id: 3,
    title: 'Post 3',
    name: 'Eliza Graterol',
    avatar: 'https://scontent.fbrm1-1.fna.fbcdn.net/v/t1.18169-9/12341239_1189570834404876_3160794268176549905_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VmxU8MgqcF0AX9Eak5U&_nc_ht=scontent.fbrm1-1.fna&oh=00_AfBGaJeRumCNlX073sSyzkKD-vjop6UOem-PYHko_6ubQg&oe=64C1B7A8',
    createdAt: 'September 14, 2023',
    image: 'https://picsum.photos/id/3/200/200',
    content: '"Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza. – Paul Leary"',
    likes: 8,
    commnents: 3,
  }
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
    <View style={{ flex: 1, width: '100%' }}>
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item:post }) => (
          <Post post={post}
              onLike={() => handleLike(post.id)}
              onDislike={() => handleDislike(post.id)} />
        )}
      />
    </View>
  );
}