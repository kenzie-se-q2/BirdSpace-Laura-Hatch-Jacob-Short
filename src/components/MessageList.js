import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { messagesRequest } from '../fetchRequests';


export default function MessageList() {
  
const [messages, setMessages] = useState([])

  useEffect(() => {

    messagesRequest().then((data) => {
      console.log( "ths is an object", data)
      //const list = data.messages.map(t => t)
      //console.log(list) 
      //const { count: [{ messages { id, text, username } }] } = data
      setMessages(data.messages)
      console.log(" this is a key value" + data.messages)
    }) 
  }, [])
  

  return (
    <>
      <Menu />
      {messages.map(message => {
        return(
        <div style={{
            opacity: 1,
            marginTop: 16
          }} class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false" data-show="true">
          <div class="toast-header">
            <strong class="mr-auto">{message.username}</strong>
          </div>
          <div class="toast-body">
            {message.text}
          </div>
        </div>);
      })}
    </>
  );
}
//const { results: [firstItem] } = data;
// const { results: [firstItem] } = data;
// // You could event destructure the content of this first array item like this
// const { results: [{ gender, name }] } = data;
// // or go deeper like this
// const { results: [{ name: { title, first, last } }] } = data;
// (found: object with keys {id, text, username, createdAt, likes}).
// If you meant to render a collection of children, use an array instead
