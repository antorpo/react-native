import React from 'react';
import {View, Image, Text, StyleSheet as estilos} from 'react-native';

export const Suggestion = ({
  title,
  year,
  rating,
  medium_cover_image,
  genres,
}) => {
  return (
    <View style={style.container}>
      <View style={style.left}>
        <Image style={style.cover} source={{uri: medium_cover_image}} />
        <View style={style.genreContainer}>
          <Text style={style.genre}>{genres[0]}</Text>
        </View>
      </View>
      <View style={style.right}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.year}>{year}</Text>
        <Text style={style.rating}>{`Rating: ${rating}`}</Text>
      </View>
    </View>
  );
};

const style = estilos.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  left: {
    paddingHorizontal: 10,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
    fontWeight: 'bold',
  },
  year: {
    backgroundColor: '#70b124',
    fontSize: 16,
    color: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  genreContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  genre: {
    color: 'white',
    fontSize: 16,
  },
});

/* 
    alignSelf nos permite hacer que el campo de texto solo ocupe el ancho de su contenido y no del 
    contenido que mas ancho sea.
*/
