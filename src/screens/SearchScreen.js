import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

import Search from '../components/Search';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const results = await Search(searchQuery);
    setSearchResults(results);
  };

  return (
    <View>
      <TextInput
        placeholder="Buscar"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}