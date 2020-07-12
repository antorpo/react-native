import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

export const Header = ({children}) => {
  const logoImg = require('../../../../assets/logo.png');

  /*
    Podriamos agregarle padding a la imagen directamente,
    pero es mejor utilizar un div (View) para el contenido.
   */
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={logoImg} style={styles.logo} />
        </View>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

/* 
  Una alternativa es darle estilos al contenedor de afuera 
  y darle la propiedad flexDirection: 'row' y un
  justifyContent: 'space-between'.
*/
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 50,
  },
  container: {
    alignItems: 'center',
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
