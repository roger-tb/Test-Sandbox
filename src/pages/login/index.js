import React from "react";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  color: rgb(94, 108, 132);
  margin: 0px auto 24px;
  margin-top: 1rem;
  padding: 55px 40px;
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

    const url =
      "https://cors-anywhere.herokuapp.com/https://account.uipath.com/oauth/token";
    const headers = {
      "Content-Type": "application/json",
      "X-UIPATH-TenantName": "AnuragDefaup29d298910"
    };
    let data = {
      grant_type: "refresh_token",
      client_id: "8DEv1AMNXczW3y4U15LL3jYf62jK93n5",
      refresh_token: "mPWz8CPTZ6FkAv5pJtQHhiWQXGuP0iDE_iRSw2tbAzwvv"
    };
    axios
      .post(url, data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        // this.setState({
        //   access_token:response.data.access_token
        // }) ;
        // let tokenObj ={
        //   access_token:response.data.access_token
        // }
        this.props.setToken(response.data.access_token);
        this.props.history.push("/chatbot");
        // console.log(this.state)
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  }
  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = false;
    let errorMsg = { ...this.state.errorMsg };

    if (password.length > 0) passwordValid = true;

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
            <div className="form-group mb-4 col-12">
              {/* <label htmlFor="nameImput">User Name</label> */}
              {/* <ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} /> */}
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.updateUsername(e.target.value)}
                className="form-control"
                id="nameImput"
                placeholder="User ID"
              />
            </div>
            <div className="form-group mb-4 col-12">
              {/* <label htmlFor="emailImput">Password</label> */}
              {/* < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} /> */}
              <input
                name="password"
                type="pasword"
                value={this.state.password}
                onChange={e => this.updatePassword(e.target.value)}
                className="form-control"
                id="emailImput"
                placeholder="password"
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
function mapStateToProps(state) {
  return {
    access_token: state.access_token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setToken: tokenObj => {
      dispatch({ type: "SET_TOKEN", payload: tokenObj });
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
