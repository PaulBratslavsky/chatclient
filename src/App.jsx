import React from "react";
import Layout from './components/Layout';
import Navigation from "./components/Navigation";
import Main from './components/Main';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <Layout other={"other props"}>
      <Navigation />
      <Main />
      <ChatBot />
    </Layout>
  );
}
