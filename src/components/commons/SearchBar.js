import React from 'react';
import {Image, View} from 'react-native';
import { Icon } from 'react-native-elements';
import s from '~/static/style';

export default function SearchBar() {
  return (
    <View style={[s.fr, s.jcsb, s.aic, s.pa(10)]}>
      <Image
        style={[s.w(80), s.h(45)]}
        resizeMode="cover"
        source={require('~/static/youtube-logo.png')}
      />
      <Icon
        name="search"
        type="font-awesome"
        onPress={() => console.log('hello')}
      />
    </View>
  );
}
