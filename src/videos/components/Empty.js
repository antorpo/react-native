import React from 'react';
import {View, Text, StyleSheet as estilos} from 'react-native';

export const Empty = ({title}) => {
  return (
    <View style={style.container}>
      <Text style={style.texto}>{title}</Text>
    </View>
  );
};

const style = estilos.create({
  container: {
    padding: 10,
  },
  texto: {
    fontSize: 16,
  },
});
