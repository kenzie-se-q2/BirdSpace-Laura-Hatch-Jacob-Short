import MessageItem from "../components/MessageItem";

const MessageList = (props) => {
    return (
        <section className="main">
            {/* <ul className="message-list">
                {props.message.map((message) => (
                    // <MessageItem 
                    // // this will hold the key value pairs for our messages
                    // />
                ))}
            </ul> */}
            <MessageItem/>
            </section>
    )
}

export default MessageList;