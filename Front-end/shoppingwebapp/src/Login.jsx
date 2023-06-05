import React,{ useState} from "react";
import img1 from './img/shop_1.png';
import img2 from './img/user_1.png';
import img3 from './img/pass_1.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Login = (props) =>{
    const [email,setEmail]=useState ('');  
    const [pass,setPass]=useState('');
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        
        <div className="form-container">
            
            <button className="button-signup"><Link to="/Signin"style={{
                    color: "#B5B5B5" }}>Sign up</Link> </button>
            <button className="button-login">Login</button>
        <form className="Login-email" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder=" Username/Email       " id="email" name="email"/>
        </form>


        <form className="Login-pass" onSubmit={handleSubmit}>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" required placeholder=" Password              " id="password" name="password"/>
            
        </form>

            <button className="button-login-down" type="submit">Login</button>

            <button className="link-forget" > Forgot Password? </button>
            <img className="shop1" src={img1} alt="shop1"></img>
            <img className="user1" src={img2} alt="user1"></img>
            <img className="pass1" src={img3} alt="pass1"></img>
        </div>
    )
}