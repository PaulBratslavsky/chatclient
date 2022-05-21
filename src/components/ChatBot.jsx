import React from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styled from "@emotion/styled";

const ChatBotWrapper = styled.div`
  height: 100%;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 55px;
`;

const MessageBox = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  background-color: #fafafa;
  border: 2px solid #9c26b0;
`;

export default function ChatBot() {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages([...messages, { message, isUser: true }]);
    setMessage("");
    setIsLoading(true);
    const responseMessage = await textQuery(message);
    setMessages(prevState => [...prevState, { message: responseMessage, isUser: false }]);
    setIsLoading(false);  
  };

  const textQuery = async (text) => {
    const response = await axios.post('/api/v1/df_text_query', {text});
    return response.data[0].queryResult.fulfillmentText;
  }

  const eventQuery = async (query) => {
    
  }

  return (
    <ChatBotWrapper>
      <MessageBox>{ messages.map((item, index) => <p key={index}>{item.isUser ? "you: " : "robot: "}{item.message}</p>)}</MessageBox>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => handleChange(e)}
          value={message}
          fullWidth
          id="fullWidth"
          label="Message"
          color="secondary"
          focused
          placeholder={isLoading ? "Sending..." : "Type your message"}
        />
      </Box>
    </ChatBotWrapper>
  );
}
