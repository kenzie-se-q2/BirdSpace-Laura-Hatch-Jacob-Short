import React from "react";
// import dataInfo from '../assets/data.json'
import Likes from '../components/Likes';

export const BirdCard = () => {
  
    const birdPhotos = [
      {
        "id": 76,
        "url": "http://www.buscaves.cl/img/17082018024245aguilucho_chico_tomas_rivas_web.jpg"
      },
  
      {
        "id": 74,
        "url": "http://www.buscaves.cl/img/17082018024833aguiluchocomun_tomas_rivas_web.jpg"
      },
  
      {
        "id": 75,
        "url": "http://www.buscaves.cl/img/17082018024423aguiluchocolarojiza_tomas_rivas_web.jpg"
      },
  
      {
        "id": 8,
        "url": "http://www.buscaves.cl/img/20082018100543albatros_de_ceja_negra_marcos_baumann_web.jpg"
      },
  
      {
        "id": 248,
        "url": "http://www.buscaves.cl/img/21082018011740albatros_errrante_liam_quinn_web.jpg"
      }
    ]
  
  
  return (
    
    <div className="birdcard">
      {birdPhotos && birdPhotos.map(photo => 
        <div>
          <img classname="Image" alt="bird" src={photo.url} />
          <Likes />
        </div>)
      }
    </div>
  );
};

export default BirdCard;
