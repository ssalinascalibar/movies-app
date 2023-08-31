import React from 'react';

//components
import Header from '../components/Header';
import Popular from '../components/Popular';
import TrendingMovies from '../components/TrendingMovies';
import Upcomings from '../components/Upcomings';

export default function Home() {

  return (
    <>
      <Header/>
      <main>
        <TrendingMovies />
        <Popular />
        <Upcomings />
      </main>
    </>
  )
}
