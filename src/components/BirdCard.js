import React from "react";
import dataInfo from "..//assets/data.json";

export const BirdCard = () => {
  const { photos } = dataInfo;
  return (
    <div className="birdCard">
      <h1>This will display bird images</h1>
      {/* {photos.map((photo) => (
        <div>
          <img classname="Image" alt="bird" src={photo.url} />
        </div>
      ))} */}
    </div>
  );
};

export default BirdCard;
