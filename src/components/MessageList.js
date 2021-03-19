import React, { useEffect } from "react";
import Menu from "../components/Menu";
import { messagesRequest } from '../fetchRequests';


export default function MessageList() {

    useEffect(() => {
        messagesRequest().then((data) => console.log(data))
    }, [])
  return (
    <>
      <Menu />
      <h1>This is your message list!</h1>
    </>
  );
}
