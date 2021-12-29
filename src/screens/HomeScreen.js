import React from 'react';
import {View, Text} from 'react-native';
import s from '~/static/style';

export default function HomeScreen() {
  console.log('HomeScreen');
  return (
    <View style={[s.container]}>
      <Text>Home123Screen</Text>
    </View>
  );
}
