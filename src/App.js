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
          <Styledheader></Styledheader>

          <Route path="/login" component={Login} />
          <Route path="/chatbot" component={CustomChatbot} />
        </div>
      </Router>
    );
  }
}
const Styledheader = styled.nav`

  height: 62px;
  width:100%;
  background: url(assets/terobots.jpg) no-repeat center; 
`;
export default App;
