
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Pages/Cart.js/Home';
import All from './All';
import './login.css';
import {Login} from './Login';
import Forget from './Forget';
import cart from './cart';
function App() {
  return (
    
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Signup">
            <Home/>
          </Route>
          <Route  path="/">
            <All></All>
          </Route>
          <Route exact path="/Forget">
            <Forget/>
          </Route>
          <Route exact path="/Cart">
            <cart></cart>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
