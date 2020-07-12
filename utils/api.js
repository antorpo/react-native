const BASE_API = 'https://yts.mx/api/v2';

class Api {
  getSuggestions = async id => {
    const response = await fetch(
      `${BASE_API}/movie_suggestions.json?movie_id=${id}`,
    );
    const {data} = await response.json();
    return data.movies;
  };
}

// Exportamos una instancia.
export default new Api();
