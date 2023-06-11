import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Tienes un nuevo seguidor' },
    { id: 2, message: 'Tu publicación ha sido compartida' },
    { id: 3, message: 'Tienes un nuevo mensaje' },
  ]);

  return (
    <View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.message}</Text>}
      />
    </View>
  );
}