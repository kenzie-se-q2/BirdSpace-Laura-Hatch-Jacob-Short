import React, { useEffect, useState } from "react";
import Likes from '../components/Likes';


export const BirdCard = () => {
  const [newInput, setNewInput] = useState ([])
  const [birdPhotos, setBirdPhotos] = useState([
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
)



        const handleSubmit = (e) => {
          e.preventDefault()
          setBirdPhotos([{
            id:0,
            url:newInput
          },...birdPhotos]) 
          setNewInput("")

        }
            const handleNewInputChange = (e) => {
              setNewInput(e.target.value)
          
            }
        
  
  return (
    <> 
  <div>                       
      <div className="input-group input-group-sm mb-3">
            
                <span className="input-group-text" id="inputGroup-sizing-sm">Type url image address</span>
                <input type="text" className="form-control" aria-label="Small" 
                    aria-describedby="inputGroup-sizing-sm"
                    value={newInput}
                    onChange={handleNewInputChange}/>         
      </div>
                <button type="button" className="btn btn-outline-primary"
                     onClick={handleSubmit}>
                      SUBMIT
                </button>
    
                       {/* <button type="button" class="btn btn-outline-primary" */}
              
                      
           

    <div className="fluid-container bg-secondary d-flex flex-column align-items-center birdcard">
      {birdPhotos && birdPhotos.map(photo => 
    <div className="card my-2" style={{
          width: '18rem'
        }}>
        <img className="card-img-top" alt="bird" src={photo.url} />
    <div className="card-body">
          <h5 className="card-title">Bird Space: Your space to like your favorite birds</h5>
          <Likes />
        </div>
      </div>)}
    </div>
    </div>
  </>
  );
};

export default BirdCard;

{/* <input type="text" class="form-control" aria-label="Small" 
aria-describedby="inputGroup-sizing-sm"
value={newInput}
onChange={handleNewInputChange}/>
*/}
{/* </form> */}
{/* <form className="ImageUploaderForm"> */}