import {React, useState} from 'react';
import './FinancialHelp.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';




function FinancialHelp() {
  const API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;
const systemMessage = { 
  "role": "system", "content": "Explain things like you're talking to a person with a basic knowledge of finance."
}
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm a virtual assistant of Smart Spender! I'm here to help you with your finances. Ask me anything!!",
      sender: "ChatGPT",
      sentTime: "just now",
      direction:'incoming'
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

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { 
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });
  
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage, 
        ...apiMessages 
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
        direction: "incoming"
      }]);
      setIsTyping(false);
    });
  }
  return (
    <div className='chat-container'> 
    <h1>Virtual Assistant</h1>
    <div className="messages-container">
      <MainContainer>
        <ChatContainer>
          <MessageList 
          scrollBehavior='smooth'
          typingIndicator= {isTyping ?<TypingIndicator content="SmartSpender is typing"/> : null}>

            {messages.map((message,i) => {
              console.log(message)
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