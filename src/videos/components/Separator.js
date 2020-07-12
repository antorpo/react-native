import React from 'react';
import {View, StyleSheet as estilos} from 'react-native';

export const VerticalSeparator = ({color}) => {
  return <View style={[style.container, {borderTopColor: color && color}]} />;
};

const style = estilos.create({
  container: {
    borderTopWidth: 1,
  },
});
