import React, {useState} from 'react';
import {View, TextInput, FlatList, StyleSheet, StatusBar} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import SearchResultCard from '../components/SearchResultCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  const fetchShows = async searchQuery => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchQuery}`,
      );
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = text => {
    setQuery(text);
    fetchShows(text);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#121212', paddingHorizontal: 8}}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <TextInput
        style={{
          backgroundColor: '#1f1f1f',
          borderRadius: 8,
          padding: 10,
          marginVertical: 10,
          color: '#fff',
        }}
        placeholder="Search Shows"
        placeholderTextColor="#888"
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        renderItem={({item}) => <SearchResultCard item={item} />}
        keyExtractor={item => item.show.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: 8,
        }}
        contentContainerStyle={{paddingBottom: 16}}
      />
    </View>
  );
};

export default Search;
