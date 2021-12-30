import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import s from '~static/style';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~screens/HomeScreen';
import VideoScreen from '~screens/VideoScreen';
import Routes from '~Routes';
// import SearchBar from '~components/common/SearchBar';
require('~/plugins/axios');
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={[s.container]}>
      {/* <Routes /> */}
    </SafeAreaView>
  );
};

export default App;
