import React, { useContext, useState } from "react";

import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import './Home.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import img1 from '../../Image/shop.png';
import { placeholder } from '@babel/types';
import { CiMenuBurger } from "react-icons/ci";
import { GrDown } from "react-icons/gr";
import { BiHomeHeart } from "react-icons/bi";
import { RiArchiveLine } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { UserContext } from "../../context/UserContext";
import ErrorMessage from "../../components/ErrorMessage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);
  
  const [click, setClick] = useState(false);
  const handleClick=()=> setClick(!click);
  const closeMenu = () => setClick(false);
  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, hashed_password: password }),
    };

    const response = await fetch("/login_register/api/users", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmationPassword && password.length > 5) {
      submitRegistration();
    } else {
      setErrorMessage(
        "Ensure that the passwords match and greater than 5 characters"
      );
    }
  };
  return (
    <section>
      <div className="Form-box">
      <div className="Formvalue">
        <form action=""> 
        <div className="tag">
          <div className="login"><button><Link to="/Login" style={{
                    color: "grey" }}>Log in</Link></button></div>
          <div className="signup"><button><Link to="/Signin"></Link>Sign up</button></div>
        </div>
        <div className="image">
        <img className="home" src={img1}></img>
        </div>
        <div className="group1">
          <div className="username">
          <CiUser/>
          <input 
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
          />
        
        </div>
        <div className="username">
           <CiMail/>
          <input 
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
       
        </div>
        <div className="username">
          <CiLock></CiLock>
          <input 
          type="password"
          placeholder="Enter password"
          value={confirmationPassword}
          onChange={(e) => setConfirmationPassword(e.target.value)}
          className="input"
          required
        />
          
        </div>
        <button className="butt" type="submit">
            <Link to="/" style={{
                    color: "white" }}>Sign up</Link>
            </button>
        
      </div>
      <ErrorMessage message={errorMessage} />
      <div className="menu" onClick={handleClick}>
        {click ? (<CiMenuBurger></CiMenuBurger>) : (<GrDown></GrDown>)}
      </div>
     
      </form>
        </div>
    </div> 
    </section>
    
  );
}




export default App;