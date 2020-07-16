import React from 'react';
import {Text, ImageBackground, StyleSheet as estilos} from 'react-native';

export const Category = ({genres, background_image}) => {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: background_image,
      }}>
      <Text style={styles.genre}>{genres[0]}</Text>
    </ImageBackground>
  );
};

const styles = estilos.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});
