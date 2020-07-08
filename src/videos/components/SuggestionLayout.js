import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const SuggestionLayout = ({title, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
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
    flex: 1,
  },
});
