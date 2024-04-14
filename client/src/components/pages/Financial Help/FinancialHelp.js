import {React, useState} from 'react';
import './FinancialHelp.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { PersistentCacheIndexManager } from 'firebase/firestore';

function FinancialHelp() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm a virtual assistant of Smart Spender! I'm here to help you with your finances. Ask me anything!!",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message : message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
  }
    


  return (
    <div className='chat-container'> 
    <h1>Virtual Assistant</h1>
    <div className="messages-container">
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((message,i) => {
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder='Type message here' onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
</div>
  )
}

export default FinancialHelp;