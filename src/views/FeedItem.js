import React, { useContext } from "react";
// import Likes from "";
// import datainfo from "../assets/data.json";
import { NewUserInfo } from '../components/SignUp';

const FeedItem = (props) => {
    const newUser = useContext(NewUserInfo);
  return (
    <div className="feed-item">
      <h1>This will display the feed</h1>
      <h1>{newUser}</h1>
    </div>
  );
};


export default FeedItem;