import React from 'react';
import {Text} from 'react-native';
import {Home} from './src/screens/containers/Home';
import {Header} from './src/sections/components/Header'

export const App = () => {
  return (
    <Home>
      <Header />
      <Text>FUNCIONANDO</Text>
    </Home>
  );
};
