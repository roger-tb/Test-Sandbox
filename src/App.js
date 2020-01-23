import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/index";
import styled from "styled-components";
import CustomChatbot from "./pages/chatbot/index";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Styledheader>Terobot Authentication</Styledheader>

          <Route path="/login" component={Login} />
          <Route path="/chatbot" component={CustomChatbot} />
        </div>
      </Router>
    );
  }
}
const Styledheader = styled.header`
  border-bottom: 1px solid #777;
  position: sticky;
  top: 0;
  zindex: 9000;
  height: 62px;
  maxheight: 62px;
`;
export default App;
