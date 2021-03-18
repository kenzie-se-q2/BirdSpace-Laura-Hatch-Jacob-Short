import React from "react";
// import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
    {/* <Switch> */}
      <Menu />
      <h2>Sign in to check out some of the coolest trending topics today!</h2>
      {!user.token && <Login />}
      <button onClick=''>Sign Up!</button>
      {/* </Switch>    */}
    </>
  );
}

export default Home;

// will have route to registration page



