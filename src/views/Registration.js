
import React from "react";
// import { Eyebrow } from '';
import SignUp from "../components/SignUp";
import image from '../assets/Images/birdhome1.PNG'
export const Registration = (props) => {
  return (
      <>
    <div className="container-xxl" >
    <div className="laura-reg">
        <SignUp />
    <img src={image} className="img-thumbnail"  alt="Logo for birdspace"/>
    </div>
    </div>
      </>
  );
};

export default Registration;

