import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import s from '~/static/style';
import SearchBar from '~components/commons/SearchBar';
import axios from 'axios';
export default function HomeScreen() {
  const getHomePage = async () => {
    const result = await axios.get('/search', {params: {part: 'snippet'}});
    console.log("____",result);
    
  };
  // getHomePage();
  return (
    <View style={[s.container]}>
      <SearchBar />
      <ScrollView>
        <Text>123</Text>
      </ScrollView>
    </View>
  );
}
