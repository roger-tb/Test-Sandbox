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
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Styledheader>{/* <img src="assets/terobots.jpg" /> */}</Styledheader>
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
const Styledheader = styled.nav`
  height: 62px;
  width: 100%;
  display: flex;
  align-content: center;
  /* background: url(assets/terobots.jpg) no-repeat center;  */
`;
export default App;
