import React,{ useContext,useState} from "react";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Redirect,} from 'react-router-dom';

export const Logout = (props) =>{
    const [token] = useContext(UserContext);
    const logout = () => {
        // localStorage.removeItem("awesomeLeadsToken",token); 
        localStorage.clear();
    
     };
    
    return(
        <button className="submit" type="submit" onClickCapture={logout}>Log out</button>
        )
}
export default Logout;