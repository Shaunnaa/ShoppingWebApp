
import './App.css';
import {Container} from 'react-bootstrap' //more center
import { useState } from 'react';
import CartProvider from './CartContext.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarcom from './Navbar.js';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cancel from './Cancel.js';
import Store from './Store.js';
import Success from './Success.js';

function Cartfix() {
  const [title, setTitle] = useState('username');
  const [mail, setMail] = useState('Email');
  //const [pass, setPass] = useState('Password');
  return (
    <CartProvider>
      <Container>
        <Navbarcom></Navbarcom>
        <BrowserRouter>
          {/* <Routes> */}
          <Switch>
            <Route index element={<Store></Store>} />
            <Route path="success" element={<Success></Success>}/>
            <Route path="cancel" element={<Cancel></Cancel>}/>
          </Switch>
          {/* </Routes> */}
        </BrowserRouter>
      </Container>
    </CartProvider>
    
  );
}

export default Cartfix;