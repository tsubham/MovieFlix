import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../utils/Themes';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('main');
    }, 3000);
  });
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'transparent'} hidden></StatusBar>
      <Image
        style={{
          width: '180%',
          height: 200,
        }}
        source={{
          uri: 'https://scontent.fdel4-2.fna.fbcdn.net/v/t39.30808-6/274993352_438600048060410_2666652150685330805_n.png?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6KLZTwWXPK0Q7kNvgF3uQxA&_nc_ht=scontent.fdel4-2.fna&oh=00_AYC7HVbLsFvZ_hF0YnArUCTSZWqlQVfDyKq9w41Kbz50aA&oe=66A42C0A',
        }}></Image>
    </View>
  );
}
