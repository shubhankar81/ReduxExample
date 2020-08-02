import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import NavbarTop from './Navbar';
import NavbarBefore from './RegisterModule/NavBefore'
import Login from './RegisterModule/Login';
import Register from './RegisterModule/Register';

// redux setup
import { Provider } from 'react-redux';
import store from './redux_file/store';
import FormsPage from './RegisterModule/REgisterValida'

function App() {
  return (
    
    <div>
     <Provider store={store}>
      <Router>
      <NavbarBefore />
      <Switch>
      <Route path="/login" ><Login /></Route>
      <Route path="/register" > <Register /></Route>
      <Route path="/reg" > <FormsPage /></Route>
      </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;