import React, { useEffect, useReducer, useState } from "react";
import Menu from "../components/Menu";
import { messagesRequest, createMessageRequest } from "../fetchRequests";
import { POST_MESSAGE, useStore } from "../store/store";

export default function MessageList() {
  const user = useStore((state) => state.user)
  const dispatch = useStore((state) => state.dispatch);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("")


  // can either create another state or i can create a function that also 
  //  will add to setMessages

  useEffect(() => {
    messagesRequest().then((data) => {
      setMessages(data.messages);
    });
  }, []);

  const handleCreateMessage = (e) => {
    e.preventDefault();
    createMessageRequest(
      newMessage,
      user.token,
    ).then((newMessage) => dispatch({ type: POST_MESSAGE, PAYLOAD: newMessage }));
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value)
  };


  return (
    <>
      <div className='container-xxl'>
      <Menu />
      <form id="new-message" onSubmit={handleCreateMessage}>
        <label htmlFor="">New Message</label>
        <input
          type="text"
          name="message"
          value={newMessage}
          autoFocus
          required 
          onChange={handleChange}/>
        <button type='submit'>POST</button>
        <div/>
      </form>
      </div>
      {messages.map((message) => {
        return (
          <div
            style={{
              opacity: 1,
              marginTop: 16,
            }}
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-autohide="false"
            data-show="true"
          >
            <div class="toast-header">
              <strong class="mr-auto">{message.username}</strong>
            </div>
            <div class="toast-body">{message.text}</div>
          </div>
          )
        })}
        </>
  );
}
