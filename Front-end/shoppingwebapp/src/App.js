
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Pages/Cart.js/Home';
import All from './All';
import './login.css';
import {Login} from './Login';
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
          <Route  path="/Shop">
            <All></All>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
