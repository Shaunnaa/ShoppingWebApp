
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
          <Route exact path="/Signin">
            <Home/>
          </Route>
          <Route  exact path="/Shop">
            <All></All>
          </Route>
        </Switch>
      </div>

      <div className="App">
        <Login />
      </div>
    </Router>
    
  );
}

export default App;
