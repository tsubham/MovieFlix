import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

const Details = ({route}) => {
  const {show} = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden></StatusBar>

      <TouchableOpacity
        style={{
          marginBottom: 15,
        }}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Image source={{uri: show.image?.original}} style={styles.image} />
      <View style={{backgroundColor: '#1f1f1f', borderRadius: 10, padding: 16}}>
        <Text style={styles.title}>{show.name}</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 18, color: '#ffd700', marginBottom: 10}}>
            Rating: {show.rating.average || 'N/A'}
          </Text>
          <Image
            style={{
              marginTop: 1,
              marginLeft: 10,
              width: 20,
              height: 22,
            }}
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20230330/original/pngtree-shiny-yellow-star-icon-clipart-png-image_9011244.png',
            }}></Image>
        </View>
        <Text style={{fontSize: 16, color: '#ccc', marginBottom: 10}}>
          Genres: {show.genres.join(', ') || 'N/A'}
        </Text>
        <Text style={styles.summary}>
          {show.summary.replace(/<\/?[^>]+(>|$)/g, '')}
        </Text>
        <Text style={styles.extraInfo}>Language: {show.language}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.extraInfo}>Premiered: {show.premiered}</Text>
          <Text style={styles.extraInfo}>Ended: {show.ended}</Text>
        </View>
        <Text style={styles.extraInfo}>Status: {show.status}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  summary: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 22,
    marginBottom: 10,
  },
  extraInfo: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
});

export default Details;
