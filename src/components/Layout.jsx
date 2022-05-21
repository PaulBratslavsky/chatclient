import React from "react";
import styled from "@emotion/styled";
import Paper from '@mui/material/Paper';

const LayoutWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 300px;
  grid-template-rows: 55px repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  
  .header { grid-area: 1 / 1 / 2 / 6; }
  .main { grid-area: 2 / 1 / 6 / 4;  }
  .chatbot { grid-area: 2 / 4 / 6 / 6;  }
`;
export default function Layout({ children }) {
  return <LayoutWrapper>
    <Paper elevation={1} className="header">{children[0]}</Paper>
    <Paper elevation={1} className="main">{children[1]}</Paper>
    <Paper elevation={1} className="chatbot">{children[2]}</Paper>
  </LayoutWrapper>;
}
