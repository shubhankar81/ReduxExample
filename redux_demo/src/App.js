import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import NavbarTop from './Navbar';
import NavbarBefore from './RegisterModule/NavBefore'
import Login from './RegisterModule/Login';
import Register from './RegisterModule/Register';

function App() {
  return (
    
    <div>
     
      <Router>
      <NavbarBefore />
      <Switch>
      <Route path="/login" ><Login /></Route>
      <Route path="/register" > <Register /></Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;