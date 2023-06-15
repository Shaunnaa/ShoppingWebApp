import React, { useState, useContext } from "react";
import img1 from './img/shop_1.png';
import img2 from './img/user_1.png';
import img3 from './img/pass_1.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ErrorMessage from './components/ErrorMessage'
import { UserContext } from "./context/UserContext"

export const Login = (props) =>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/login_register/api/token", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

    return(
        
        <div className="form-container">
                 <form className="box" onSubmit={handleSubmit}>
 
            <button className="button-signup"><Link to="/Signin"style={{
                    color: "#B5B5B5" }}>Sign up</Link> </button>
            <button className="button-login">Login</button>
        <div className="Login-email">
        {/* <form className="Login-email" onSubmit={handleSubmit}> */}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder=" Username/Email       " id="email" name="email"/>
        {/* </form> */}
        </div>
        <div className="Login-pass">
        {/* <form className="Login-pass" onSubmit={handleSubmit}> */}
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder=" Password              " id="password" name="password"/>
        </div>
        {/* </form> */}
             <ErrorMessage message={errorMessage} />

            <button className="button-login-down" type="submit">Login</button>

            <button className="link-forget" > <Link to="/Forget" style={{
                    color: "grey" }}>Forgot Password?</Link> </button>
            <img className="shop1" src={img1} alt="shop1"></img>
            <img className="user1" src={img2} alt="user1"></img>
            <img className="pass1" src={img3} alt="pass1"></img>
            </form>
        </div>
    )
}