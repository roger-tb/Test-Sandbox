import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Link,
  Route
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/index";
import styled from "styled-components";
import CustomChatbot from "./pages/chatbot/index";
import banner from "./assets/terobots_white.png"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Styledheader>
          <StyledLogo></StyledLogo>
            </Styledheader>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/chatbot" exact component={CustomChatbot} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const Styledheader = styled.div`
  height: 100px;
  width: 100%;

  margin: 0 auto;
  text-align: center;
  width: 100%;
 
`;

const StyledLogo = styled.div`
width:100%;
height:100%;
background:url(${banner}) no-repeat; 
background-size: 10rem;
background-position: center;

`;
export default App;
