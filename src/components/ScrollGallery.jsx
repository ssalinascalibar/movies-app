import React from "react";

//context
import Context from '../Context'
import { useContext } from 'react'

export default function ScrollGallery({props, id}) {

    const { IMAGE_PATH } = useContext(Context);

    function leftScroll(id) {
        const left = document.querySelector(`#${id} .scroll-gallery`);
        console.log(left)
        left.scrollBy(-200, 0);
    }

    function rightScroll() {
        const right = document.querySelector(`#${id} .scroll-gallery`);
        console.log(right)
        right.scrollBy(200, 0);
    }

  return (
    <div className="cover">
      <div className="scroll-gallery" id={id}>
        <div
          className="left carousel-control-prev-icon wrap-arrow-gallery"
          onClick={() => leftScroll(id)}
        ></div>
        {props.map((prop) => (
          <div key={prop.id} className="wrap-gallery">
            <img
              src={IMAGE_PATH + prop.poster_path}
              alt={prop.original_title}
            />
          </div>
        ))}
        <div
          className="right carousel-control-next-icon wrap-arrow-gallery"
          onClick={() => rightScroll(id)}
        ></div>
      </div>
    </div>
  );
}
