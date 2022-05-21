import React, { useEffect, useRef } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
  overflow-x: scroll;
`;

export default function ChatBot() {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const ref = useRef(null);

  useEffect(() => {

    console.log(
      ref.current.scrollTop,
      ref.current.clientHeight,
      ref.current.scrollHeight,
    )
    const shouldScroll = ref.current.scrollTop + ref.current.clientHeight < ref.current.scrollHeight;
    if (shouldScroll) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  },[messages]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessages([...messages, { message, isUser: true }]);
    setMessage("");

    setIsLoading(true);

    const response = await textQuery(message);
    for (let message of response) {
      const { text } = message.text;
      for (let message of text) {
        setMessages((prevState) => [...prevState, { message, isUser: false }]);
      }
    }

    setIsLoading(false);
  };

  const textQuery = async (text) => {
    const response = await axios.post("/api/v1/df_text_query", { text });
    return response.data[0].queryResult.fulfillmentMessages;
  };

  const eventQuery = async (query) => {};

  console.log(ref);
  return (
    <ChatBotWrapper>
      <MessageBox ref={ref}>
        {messages.map((item, index) => (
          <p key={index}>
            {item.isUser ? "you: " : "robot: "}
            {item.message}
          </p>
        ))}
      </MessageBox>
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
