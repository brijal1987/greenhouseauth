import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header  from './components/Header/Header';
import Sidebar  from './components/Sidebar/Sidebar';
import Home  from './components/Home/Home';
import copy from './copy';

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import axios from "axios";
import $ from "jquery";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      pessengers : {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this._getUsers();
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
    }

  }

  _getUsers = async () => {
    let res = await axios.get("http://localhost:8000/api/user/getData");
    let { data } = res.data;
    console.log("users", data);
    this.setState({ pessengers: data, isLoading:false });
 };

  _loginUser = (email, password) => {
    $("#login-form button")
      .attr("disabled", "disabled")
      .html(
        '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
      );
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://localhost:8000/api/user/login/", formData)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert("Login Successful!");

          let userData = {
            name: json.data.data.name,
            id: json.data.data.id,
            email: json.data.data.email,
            auth_token: json.data.data.auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            user: userData
          };
          // save app state with user date in local storage
          localStorage["appState"] = JSON.stringify(appState);
          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
        } else alert("Login Failed!");

        $("#login-form button")
          .removeAttr("disabled")
          .html("Login");
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
        $("#login-form button")
          .removeAttr("disabled")
          .html("Login");
      });
  };

  _registerUser = (name, email, password) => {
    $("#email-login-btn")
    .attr("disabled", "disabled")
    .html(
    '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
    );

    var formData = new FormData(); 
    formData.append("password", password);
    formData.append("email", email);
    formData.append("name", name);

    axios
    .post("http://localhost:8000/api/user/register", formData)
    .then(response => {
    console.log(response);
    return response;
    })
    .then(json => {
    if (json.data.success) {
        alert(`Registration Successful!`);

        let userData = {
        name: json.data.data.name,
        id: json.data.data.id,
        email: json.data.data.email,
        auth_token: json.data.data.auth_token,
        timestamp: new Date().toString()
        };
        let appState = {
        isLoggedIn: true,
        user: userData
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
        isLoggedIn: appState.isLoggedIn,
        user: appState.user
        });
    } else {
        alert(`Registration Failed!`);
        $("#email-login-btn")
        .removeAttr("disabled")
        .html("Register");
    }
    })
    .catch(error => {
    alert("An Error Occured!" + error);
    console.log(`${formData} ${error}`);
    $("#email-login-btn")
        .removeAttr("disabled")
        .html("Register");
    });
  };

  _logoutUser = () => {
    let appState = {
      isLoggedIn: false,
      user: {}
    };
    // save app state with user date in local storage
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
  };

  render() {
    if (
      !this.state.isLoggedIn &&
      this.props.location.pathname !== "/login" &&
      this.props.location.pathname !== "/register"
    ) {
      console.log(
        "you are not loggedin and are not visiting login or register, so go to login page"
      );
      this.props.history.push("/login");
    }
    if (
      this.state.isLoggedIn &&
      (this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/register")
    ) {
      console.log(
        "you are either going to login or register but youre logged in"
      );

      this.props.history.push("/");
    }
    const { isLoading } = this.state;

    return (
      <Switch data="data">
        <div className="App" id="main">
          <Header isLoggedIn={this.state.isLoggedIn} logoutUser={this._logoutUser} copy={copy}></Header>
          <div className="row">
            <div className="col-md-9 box">
              <div className="inner">
                <Route
                  exact
                  path="/"
                  render={props => (
                    <>
                    {!isLoading ?
                    <Home
                      {...props}
                      copy={copy}
                      {...this.state}                    />
                    : <h3>Loading...</h3>
                    }
                      </>
                  )}
                />
                <Route
                  path="/login"
                  render={props => <Login {...props} loginUser={this._loginUser} />}
                />

                <Route
                  path="/register"
                  render={props => (
                    <Register {...props} registerUser={this._registerUser} />
                  )}
                />
                <Route path="/about" component={About} />
              </div>
            </div>
            <div className="col-md-3 box">
              <div className="inner">
                <Sidebar copy={copy}></Sidebar>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    );
  }
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App