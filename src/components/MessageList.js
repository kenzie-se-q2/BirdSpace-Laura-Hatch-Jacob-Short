import React, { useEffect, useReducer, useState } from "react";
import Menu from "../components/Menu";
import { messagesRequest, createMessageRequest, deleteMessageRequest } from "../fetchRequests";
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
    ).then((data) => {
      dispatch({ type: POST_MESSAGE, PAYLOAD: data })
      setMessages([
        data.message,
        ...messages
      ])
    });
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value)
  };

  const deleteMessageButtonClick = (e, messageId) => {
    deleteMessageRequest(messageId, user.token).then((data) => {
      setMessages(messages.filter(message => message.id !== messageId));
    })
  }


  return (
    <>
      <div className='container-xxl'>
      <Menu />
      <div>
        <h1>Top 10 Most Liked Messages</h1>
        <div>
          {messages.sort((a, b) => a.likes.length < b.likes.length ? 1 : -1).slice(0, 10).map((message) => {
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
            <div class="toast-header justify-content-between">
              <strong class="mr-auto">{message.username}</strong>
              {user.username === message.username ? 
                <button className="btn btn-outline-danger" onClick={(event) => {
                  deleteMessageButtonClick(event, message.id);
                }}>Delete Message</button> : null
              }
            </div>
            <div class="toast-body">
              <div>{message.text}</div><div>👍 {message.likes.length}</div></div>
          </div>
          )
        })}
        </div>
      </div>
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
            <div class="toast-header justify-content-between">
              <strong class="mr-auto">{message.username}</strong>
              {user.username === message.username ? 
                <button className="btn btn-outline-danger" onClick={(event) => {
                  deleteMessageButtonClick(event, message.id);
                }}>Delete Message</button> : null
              }
            </div>
            <div class="toast-body">{message.text}</div>
          </div>
          )
        })}
        </>
  );
}
