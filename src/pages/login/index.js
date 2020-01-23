import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// import { useAuth } from "../context/auth";

function Login(props) {
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   const { setAuthTokens } = useAuth();
  // const referer = props.location.state.referer || '/';

  function postLogin() {
    console.log(userName);
    history.push("/chatbot");
    // axios.post("https://www.somePlace.com/auth/login", {
    //   userName,
    //   password
    // }).then(result => {
    //   if (result.status === 200) {
    //     setAuthTokens(result.data);
    //     setLoggedIn(true);
    //   } else {
    //     setIsError(true);
    //   }
    // }).catch(e => {
    //   setIsError(true);
    // });
  }

  // if (isLoggedIn) {
  //   return <Redirect to={referer} />;
  // }

  return (
    <MuiThemeProvider key={"theme"}>
      <div>
        <TextField
          hintText="Enter your user Id"
          floatingLabelText="User Id"
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <TextField
          hintText="Enter your password"
          floatingLabelText="Password"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
          onClick={postLogin}
        />
        <br />
      </div>

      {/* <Link to="/signup">Don't have an account?</Link> */}
    </MuiThemeProvider>
  );
}
const style = {
  margin: 15
};
export default Login;
