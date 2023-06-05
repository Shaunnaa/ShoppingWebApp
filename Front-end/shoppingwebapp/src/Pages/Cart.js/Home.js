import { useState } from 'react';
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiAccessibility } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import './Home.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import img1 from '../../Image/shop.png';


function App() {
  const [title, setTitle] = useState('username');
  const [mail, setMail] = useState('Email');
  //const [pass, setPass] = useState('Password');
  return (
    <section>
      <div className="Form-box">
      <div className="Formvalue">
        <form action=""> 
        <div className="tag">
          <div className="login"><button>Log in</button></div>
          <div className="signup"><button>Sign up</button></div>
        </div>
        <div className="image">
        <img className="home" src={img1}></img>
        </div>
        <div className="group1">
          <div className="username">
            
          <CiUser/><p>Username</p>
          <input type="username" required   onChange={(e)=> setTitle(e.target.value) }></input>
        
        </div>
        <div className="username">
           <CiMail/><p>Email</p>
          <input type="email" required  onChange={(e)=> setMail(e.target.value) }></input>
       
        </div>
        <div className="username">
          <CiLock></CiLock>
          <input type="password" required  ></input>
          
        </div>
        <div className="butt">
            <button>Sign up</button>
            </div>
        
      </div>
      </form>
        </div>
    </div> 
    </section>
    
  );
}

export default App;