import React from "react";

//context
import Context from '../Context'
import { useContext } from 'react'

export default function ScrollGallery({props, sectionId}) {

    const { IMAGE_PATH } = useContext(Context);

    function leftScroll(sectionId) {
        const left = document.querySelector(`#${sectionId} .scroll-gallery`);
        console.log(left)
        left.scrollBy(-200, 0);
    }

    function rightScroll() {
        const right = document.querySelector(`#${sectionId} .scroll-gallery`);
        console.log(right)
        right.scrollBy(200, 0);
    }

  return (
    <div className="cover">
      <div className="scroll-gallery" id={sectionId}>
        <div
          className="left carousel-control-prev-icon wrap-arrow-gallery"
          onClick={() => leftScroll(sectionId)}
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
          onClick={() => rightScroll(sectionId)}
        ></div>
      </div>
    </div>
  );
}
