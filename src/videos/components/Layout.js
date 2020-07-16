import React from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';

export const Layout = ({title, image, horizontal, children}) => {
  return (
    <ImageBackground
      source={image}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.container, {flex: horizontal ? 0 : 1}]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4c4c4c',
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
