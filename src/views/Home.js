import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";
// import Eyebrow from "../components/EyeBrow "

import image from '../assets/Images/birdhome1.PNG'


function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
    <div className="container-xxl">
      <Menu/>
    <img src={image} class="img-fluid" alt="Logo for birdspace bottom-margin: "></img> 
      {!user.token && <Login />}
  </div>
    </>
  );
}

export default Home;






