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
      <Menu />
      <form id="new-message" onSubmit={handleCreateMessage}>
        <label htmlFor="">New Message</label>
        <input
          type="text"
          name="message"
          value={newMessage}
          autoFocus
          required 
          onChange={handleChange}
        />
        <button type='submit'>POST</button>
      </form>
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
//const { results: [firstItem] } = data;
// const { results: [firstItem] } = data;
// // You could event destructure the content of this first array item like this
// const { results: [{ gender, name }] } = data;
// // or go deeper like this
// const { results: [{ name: { title, first, last } }] } = data;
// (found: object with keys {id, text, username, createdAt, likes}).
// If you meant to render a collection of children, use an array instead
