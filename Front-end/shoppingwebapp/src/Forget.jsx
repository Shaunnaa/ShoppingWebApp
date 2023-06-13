import React,{ useState} from "react";
import img2 from './Image/user 1.png';
import img4 from './Image/padlock 1.png';
import './Forget.css';
export const Forget = (props) =>{
    const [email,setEmail]=useState ('');  
    
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="forget-main">
        
        <form className="Forget-email" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder=" Your Email       " id="email" name="email"/>
        </form>
        <img className="passagain" src={img4} alt="passagain"></img>
        <img className="user1" src={img2} alt="user1"></img>
        <label className="kuay">Email</label>
        <button className="head">Forget Password</button>
        <button className="back" > Back </button>
        <button className="submit" type="submit">Submit</button>
        </div>
        )
}
export default Forget;