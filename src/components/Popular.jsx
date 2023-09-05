import React from 'react'

//context
import Context from '../Context';
import { useContext } from 'react';

//components
import ScrollGallery from './ScrollGallery';

export default function Popular() {

    const { popular } = useContext(Context);

  return (
    <section id="popular">
        <h2>Populares</h2>
        <ScrollGallery props={popular} sectionId="popular" />
    </section>
  )
}
