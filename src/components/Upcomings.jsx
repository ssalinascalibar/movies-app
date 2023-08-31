import React from 'react'

//context
import Context from '../Context';
import { useContext } from 'react';

export default function upcumings() {

    const { upcomings, IMAGE_PATH } = useContext(Context);

  return (
    <section id="upcoming">
        <h2>Próximamente</h2>
        <div className="scroll-gallery">
            { upcomings.map((upcoming) => 
            <div key={upcoming.id} className="wrap-gallery">
                <img src={ IMAGE_PATH + upcoming.backdrop_path} alt={upcoming.original_title} />
                <p>{upcoming.original_title}</p> 
            </div> 
            )}
        </div>
    </section>
  )
}