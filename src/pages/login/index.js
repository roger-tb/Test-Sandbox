import React from "react";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  color: rgb(94, 108, 132);
  margin: 0px auto 24px;
  padding: 24px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
`;

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usernameValid: false,
      password: "",
      passwordValid: false,
      formValid: false,
      errorMsg: {}
    };

    // this.handleChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    const { usernameValid, passwordValid } = this.state;
    this.setState({
      formValid: usernameValid && passwordValid
    });
  };

  updateUsername = username => {
    this.setState({ username }, this.validateUsername);
  };
  updatePassword = password => {
    this.setState({ password }, this.validatePassword);
  };
  handleSubmit(event) {
    // alert(this.state.username);
    this.props.history.push("/chatbot");
    // const history = useHistory();
    // history.push("/chatbot");
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
    event.preventDefault();
  }
  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = false;
    let errorMsg = { ...this.state.errorMsg };

    // must be 6 chars
    // must contain a number
    // must contain a special character
    if (password.length > 0) passwordValid = true;

    // if (password.length < 6) {
    //   passwordValid = false;
    //   errorMsg.password = "Password must be at least 6 characters long";
    // } else if (!/\d/.test(password)) {
    //   passwordValid = false;
    //   errorMsg.password = "Password must contain a digit";
    // } else if (!/[!@#$%^&*]/.test(password)) {
    //   passwordValid = false;
    //   errorMsg.password = "Password must contain special character: !@#$%^&*";
    // }

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = false;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length > 0) usernameValid = true;

    // if (username.length < 3) {
    //   usernameValid = false;
    //   errorMsg.username = "Must be at least 3 characters long";
    // }

    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  render() {
    return (
      <StyledSection>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="nameImput">User Name</label>
              {/* <ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} /> */}
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.updateUsername(e.target.value)}
                className="form-control"
                id="nameImput"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="emailImput">Password</label>
              {/* < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} /> */}
              <input
                name="password"
                type="pasword"
                value={this.state.password}
                onChange={e => this.updatePassword(e.target.value)}
                className="form-control"
                id="emailImput"
                placeholder="email@domain.com"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            disabled={!this.state.formValid}
            className="btn btn-primary w-100"
          />
        </form>
      </StyledSection>
    );
  }
}

export default Login;
