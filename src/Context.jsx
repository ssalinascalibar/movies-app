/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

import axios from "axios";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [topRated, setTopRated] = useState([]);
  

  // API_URL es la url base de la api
  const API_URL = "https://api.themoviedb.org/3";

  // API KEY valida que ya tenemos una cuenta y estamos logeados en la pagina de api
  const API_KEY = "aefa2e1cd914d8aa599ab72e9bbdd21a";

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  // const MOVIES = '/trending/movie/day?'
  // const POPULAR_RATED = '/movie/popular?'
  // const UPCOMING = '/movie/upcoming?'
  // const TOP_RATED = '/movie/top_rated?'

  // almacenamos todos los endpoints en un array para optimizar código
  const endpoints = [
    `${API_URL}/trending/movie/day?api_key=${API_KEY}`, //url con todas las películas en tendencia en tmdb
    `${API_URL}/movie/popular?api_key=${API_KEY}`, // url con las películas populares
    `${API_URL}/movie/upcoming?api_key=${API_KEY}`, // url con las películas próximas en llegar
    `${API_URL}/movie/top_rated?api_key=${API_KEY}` // url con las películas mejor rankeadas
    // `${API_URL}/movie/238/videos?api_key=${API_KEY}`, // url con las películas mejor rankeadas
  ];

  useEffect(() => {
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([
        { data: movies },
        { data: popular },
        { data: upcomings },
        { data: topRated },
      ]) => (
        setMovies(movies?.results),
        setPopular(popular?.results),
        setUpcomings(upcomings?.results),
        setTopRated(topRated?.results) 
      )
    );

    // axios.get(`${API_URL}${MOVIES}api_key=${API_KEY}`)
    // .then((response) => {
    //   setMovies(response.data);
    // });

    // axios.get(`${API_URL}${POPULAR_RATED}api_key=${API_KEY}`)
    // .then((response) => {
    //   setPopular(response.data);
    // });
  }, []);

  return (
    <Context.Provider
      value={{
        movies,
        popular,
        upcomings,
        IMAGE_PATH,
        topRated,
        API_URL,
        API_KEY,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
