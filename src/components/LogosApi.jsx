import { React, useState, useEffect } from "react";

import axios from "axios";

//context
import Context from "../Context";
import { useContext } from "react";

import Image from "react-bootstrap/Image";

export default function LogosApi({ id }) {

    const [logo, setLogo] = useState({});

    const { IMAGE_PATH, API_URL, API_KEY } = useContext(Context);

    const getLogo = async () => {
        console.log(id);
        if (id) {
          const logosc = await axios
          .get(`${API_URL}/movie/${id}/images?api_key=${API_KEY}`)
            console.log(logosc)
            const companyLogo = logosc.data.logos.find((log) => log.iso_639_1 === "en")
            setLogo(companyLogo ? companyLogo : logosc.data.logos[0]);
    
        }
      };

      useEffect(() => {
        getLogo();
      }, []);

  return (
    <div className="logo-trailer">
        <Image src={IMAGE_PATH + logo.file_path} /> 
    </div>
  )
}
