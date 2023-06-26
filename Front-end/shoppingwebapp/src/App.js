import React, { useContext, useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router,Route, Switch,Redirect,} from 'react-router-dom';
import Signin from './Pages/Cart.js/Signin';
import All from './All';
import './login.css';
import {Login} from './Login';
import Forget from './Forget';
import Cartfix from './Cart/Cartfix';
import { UserContext } from "./context/UserContext";
import AppCart from "./Cart/AppCart";
import Logout from "./Logout";
function App() {

  const [message, setMessage] = useState("");
  const [token] = useContext(UserContext);

  const getWelcomeMessage = async() =>{
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch("/login_register/api", requestOption);
    const data = await response.json();

    if (!response.ok){
      console.log("something messed up");
    } else {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  },[])

  return (
    
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/Login">
            {/* <Login></Login> */}
            {
              !token ? (
                <div className="columns">
                  <Login />
                </div>
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/Signin">
            {/* <Signin /> */}
            {
              !token ? (
                <div className="columns">
                  <Signin />
                </div>
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>
          <Route exact path="/Forget">
            <Forget/>
          </Route>
          <Route exact path="/Cartfix">
            <AppCart/>
          </Route>
          <Route exact path="/">
            <All></All>
          </Route>
          <Route exact path="/logout">
            <Logout/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
