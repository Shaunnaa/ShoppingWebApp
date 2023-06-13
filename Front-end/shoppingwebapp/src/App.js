
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Pages/Cart.js/Home';
import All from './All';
import './login.css';
import {Login} from './Login';
import Forget from './Forget';
function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/Signin">
            <Home/>
          </Route>
          
          <Route exact path="/Shop">
            <All></All>
          </Route>
          <Route exact path="/Forget">
            <Forget/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
