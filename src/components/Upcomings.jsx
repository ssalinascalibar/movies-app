import React from 'react'

//context
import Context from '../Context';
import { useContext } from 'react';

//components
import ScrollGallery from './ScrollGallery';

export default function upcumings() {

    const { upcomings, IMAGE_PATH } = useContext(Context);

  return (
    <section id="upcoming">
        <h2>Próximamente</h2>
        <ScrollGallery props={upcomings} sectionId="upcoming" />
    </section>
  )
}