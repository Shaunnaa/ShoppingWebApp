
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
          <Route exact path="/">
            <All></All>
          </Route>
          <Route path="/Ho">
            <Home/>
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
