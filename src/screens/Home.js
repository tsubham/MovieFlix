import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../utils/Themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import MovieCards from '../components/MovieCards';
import axios from 'axios';

export default function Home() {
  const [numColumns, setNumColumns] = useState(2);

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          'https://api.tvmaze.com/search/shows?q=all',
        );
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShows();
  }, []);

  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        flex: 1,
      }}>
      <StatusBar hidden></StatusBar>
      <View
        style={{
          padding: 20,
          marginTop: -10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{height: 50, width: 150}}
          source={require('./../assets/images/movieFLix.png')}></Image>
        <TouchableOpacity
          onPress={() => navigation.navigate('search')}
          style={{
            marginTop: 10,
            marginRight: 10,
          }}>
          <Ionicons name="search" size={30} color={'grey'} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          padding: 20,
          color: '#973131',
          fontSize: 20,
          fontWeight : 'bold' ,
        }}>
        All Movies
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <FlatList
          data={shows}
          numColumns={numColumns}
          keyExtractor={item => item.show.id.toString()}
          renderItem={({item, index}) => (
            <MovieCards item={item} key={index} />
          )}></FlatList>
      </View>
    </View>
  );
}
