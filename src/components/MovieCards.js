import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Themes';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MovieCards({item}) {
  const navigation = useNavigation();

  const truncateSummary = (summary, wordLimit) => {
    const words = summary.split(' ');
    if (words.length <= wordLimit) return summary;
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('details', {show: item.show})}
      style={styles.itemContainer}>
      <LinearGradient
        colors={['#000000', '#434343']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.card}>
        <Image
          source={{uri: item.show.image?.medium}}
          style={styles.thumbnail}
        />
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
            {item.show.name}
          </Text>
          <Text style={{fontSize: 14, color: '#eeeeee', }}>
            {truncateSummary(item.show.summary.replace(/<[^>]+>/g, ''), 35)}...{' '}
            <Text
              style={{
                color: 'grey',
                fontWeight: '-10',
                fontStyle: 'italic'
              }}>
              {' '}
              Know more
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    marginBottom: 8,
  },
  card: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
