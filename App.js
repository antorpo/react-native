import React, {useEffect, useState} from 'react';
import {Home} from './src/screens/containers/Home';
import {Header} from './src/sections/components/Header';
import {ItemList} from './src/videos/containers/ItemList';
import {Category} from './src/videos/components/Category';
import {Suggestion} from './src/videos/components/Suggestion';
import Api from './utils/api';

export const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [movies, setMovies] = useState([]);
  const categoriesImage = require('./assets/background.png');
  /* 
    Usamos el efecto para traer los datos de la API: 
    Sin ninguna dependencia para que solo sea como el componentDidMount()
  */
  useEffect(() => {
    const getData = async () => {
      const suggestionsResponse = await Api.getSuggestions(1);
      const moviesResponse = await Api.getMovies();

      setSuggestions(suggestionsResponse);
      setMovies(moviesResponse);
    };

    getData();
  }, []);

  return (
    <Home>
      <Header />
      <ItemList
        data={movies}
        title="Categorias"
        RenderElement={Category}
        horizontal={true}
        color="green"
        image={categoriesImage}
      />
      <ItemList
        data={suggestions}
        title="Recomendaciones para ti"
        RenderElement={Suggestion}
        color="green"
      />
    </Home>
  );
};
