import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Home from '~screens/Home';
import s from '~static/style';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={[s.cf]}>Test</Text>
      <Home />
    </SafeAreaView>
  );
};

export default App;
