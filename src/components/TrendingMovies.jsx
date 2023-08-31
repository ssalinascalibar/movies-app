import React from 'react'

//context
import Context from '../Context';
import { useContext } from 'react';

//components
import ScrollGallery from './ScrollGallery';

export default function TrendingMovies() {

    const { movies } = useContext(Context);

  return (
    <section id="trendingMovies">
        <h2>Tendencias</h2>
        <ScrollGallery props={movies} id="trendingMovies" />
    </section>
  )
}
