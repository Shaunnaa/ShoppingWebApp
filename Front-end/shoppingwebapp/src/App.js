
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Pages/Cart.js/Home';
import All from './All';
import './login.css';
import {Login} from './Login';
import Forget from './Forget';
import Cart from './cart';
function App() {
  return (
    
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route exact path="/Signin">
            <Home/>
          </Route>
          <Route exact path="/Forget">
            <Forget/>
          </Route>
          <Route exact path="/Cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/">
            <All></All>
          </Route>
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
