import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Home} from './src/screens/containers/Home';
import {Header} from './src/sections/components/Header';
import {SuggestionList} from './src/videos/containers/SuggestionList';
import Api from './utils/api';

export const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  /* 
    Usamos el efecto para traer los datos de la API: 
    Sin ninguna dependencia para que solo sea como el componentDidMount()
  */
  useEffect(() => {
    const getSuggestions = async () => {
      const response = await Api.getSuggestions(1);
      setSuggestions(response);
    };

    getSuggestions();
  }, []);

  return (
    <Home>
      <Header />
      <SuggestionList data={suggestions} />
    </Home>
  );
};
