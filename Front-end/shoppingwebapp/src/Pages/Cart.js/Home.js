import { useState } from 'react';

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
function App() {
  const [title, setTitle] = useState('username');
  const [mail, setMail] = useState('Email');
  const [click, setClick] = useState(false);
  const handleClick=()=> setClick(!click);
  const closeMenu = () => setClick(false);
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
          <input type="username" required  placeholder={title} onChange={(e)=> setTitle(e.target.value)} ></input>
        
        </div>
        <div className="username">
           <CiMail/>
          <input type="email" required  placeholder={mail} onChange={(e)=> setMail(e.target.value)} ></input>
       
        </div>
        <div className="username">
          <CiLock></CiLock>
          <input type="password" required placeholder=" Password" ></input>
          
        </div>
        <button className="butt" type="submit">
            <Link to="/" style={{
                    color: "white" }}>Sign up</Link>
            </button>
        
      </div>
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