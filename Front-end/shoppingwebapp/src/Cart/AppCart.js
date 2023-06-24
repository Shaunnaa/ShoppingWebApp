
import './App.css';
import {Container} from 'react-bootstrap' //more center
import { useState } from 'react';
import CartProvider from './CartContext.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarcom from './Navbar.js';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';
import Cancel from './Cancel.js';
import Store from './Store.js';
import Success from './Success.js';

function App() {
  const [title, setTitle] = useState('username');
  const [mail, setMail] = useState('Email');
  //const [pass, setPass] = useState('Password');
  return (
    <CartProvider>
    <Container>
      <Navbarcom></Navbarcom>
      <Store></Store>
      <BrowserRouter>
        <Switch>
          <Route path="success" element={<Success></Success>}/>
          <Route path="cancel" element={<Cancel></Cancel>}/>
        </Switch>
      </BrowserRouter>
    </Container>
    </CartProvider>
    
  );
}

export default App;
