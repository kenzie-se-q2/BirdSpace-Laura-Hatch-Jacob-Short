import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Menu />
      <h2>Sign in to check out some of the coolest trending topics today!</h2>
      {!user.token && <Login />}
    </>
  );
}

export default Home;






