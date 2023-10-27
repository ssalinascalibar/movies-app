import { React, useState, useEffect } from "react";

import axios from "axios";

//context
import Context from "../Context";
import { useContext } from "react";

//components
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import VideoPlayer from "../components/VideoPlayer";
import ReactPlayer from "react-player/youtube";
import LogosApi from "./LogosApi";

export default function Header() {
  // const [videos, setVideos] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [playing, setPlaying] = useState(false);
  
  console.log(playing);
  console.log(trailer)
  

  // Se coloca ? para poder renderizar y tambien ver el console log, ya que trailer solo existe cuando se ejecuta el onclick, es decir en el primer render no existe esta variable
  console.log(trailer?.key);
  
  const { topRated, IMAGE_PATH, API_URL, API_KEY } = useContext(Context);
  
  const getVideos = async (id) => {
    console.log(id);
    if (id) {
      const videos = await axios
      .get(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`)
        console.log(videos)
        const trailerVideo = videos.data.results.find((vid) => vid.type === "Trailer")
        setTrailer(trailerVideo ? trailerVideo : videos.data.results[0]);
        console.log(trailer.key); 
    }
  };

  // const getLogo = async (id) => {
  //   console.log(id);
  //   if (id) {
  //     const logosc = await axios
  //     .get(`${API_URL}/movie/${id}/images?api_key=${API_KEY}`)
  //       console.log(logosc)
  //       const companyLogo = logosc.data.logos.find((log) => log.iso_639_1 === "en")
  //       setLogo(companyLogo ? companyLogo : logosc.data.logos[0]);

  //   }
  // };

  // const getId = (id) => {
  //   getVideos(id)
  // }
  
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <header>
      <Carousel indicators={false}>
        {topRated.map((top) => (
          <Carousel.Item key={top.id}>
            <Image src={IMAGE_PATH + top.backdrop_path} text="First slide" id="header-bkg"/>
            <Carousel.Caption>
              <div className="carousel-content">
                <LogosApi id={top.id}/>
                <p>{top.overview}</p>
                <button className="trailerBtn" onClick={() => { getVideos(top.id) ; setPlaying(true) }}>
                  <i className="fa-solid fa-play"></i> Ver Trailer
                </button>
                <button className="trailerBtn" onClick={() => { getVideos(top.id) ; setPlaying(true) }}>
                  <i className="fa-solid fa-circle-info"></i> Más información
                </button>
                {/* <button onClick={() => setPlaying(false)}>Cerrar</button> */}
                {/* <button onClick={() => setPlaying(true)}>ver trailer</button> */}
                
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        { playing ? (
                <div className="player-wrapper">
                  <ReactPlayer
                  controls
                    playing
                    className="react-player"
                    url={`https://www.youtube.com/watch?v=${trailer?.key}`}
                    width="100%"
                    height="100%"
                  />
                  {/* <img src={logo} alt="" /> */}
                  <button className="trailerBtn" onClick={() => setPlaying(false)}>
                  <i className="fa-solid fa-xmark"></i> Salir
                  </button>
                </div>
                ) : (
                  <p> "Lo sentimos, no hay contenido disponible de momento" </p>
                )}
      </Carousel>
    </header>
  );
}
