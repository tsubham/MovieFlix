import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SearchResultCard({item}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#1f1f1f',
        borderRadius: 10,
        padding: 8,
        margin: 8,
        width: '48%',
      }}
      onPress={() => navigation.navigate('details', {show: item.show})}>
      <Image
        source={{uri: item.show.image?.medium}}
        style={{
          width: '100%',
          height: 150,
          borderRadius: 8,
        }}
      />
      <View style={{marginTop: 8}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {item.show.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
