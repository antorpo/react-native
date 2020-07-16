import React from 'react';
import {View, StyleSheet as estilos} from 'react-native';

export const Separator = ({color, horizontal}) => {
  return (
    <View
      style={[
        horizontal ? style.horizontal : style.vertical,
        {borderTopColor: color && color},
      ]}
    />
  );
};

const style = estilos.create({
  vertical: {
    borderTopWidth: 1,
  },
  horizontal: {
    flex: 1,
    marginHorizontal: 5,
  },
});
