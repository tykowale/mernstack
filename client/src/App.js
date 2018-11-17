import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";

import "./App.css";
import { logoutUser, setCurrentUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">

            <NavBar/>

            <Route exact path="/" component={Landing}/>

            <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
            </div>

            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
