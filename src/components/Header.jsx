import React from 'react'
//context
import Context from '../Context';
import { useContext } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


export default function Header() {

  const { topRated, IMAGE_PATH } = useContext(Context);
  
  return (
    <header>
      <Carousel indicators={false}>
        { topRated.map((top) => 
        <Carousel.Item key={top.id}>
          <Image src={ IMAGE_PATH + top.backdrop_path} text="First slide" />
          <Carousel.Caption>
            <h3>{top.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        )}
      </Carousel>
    </header>
  )
}
