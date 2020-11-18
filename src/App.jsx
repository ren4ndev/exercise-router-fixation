import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users/:id' render={(props) => <Users {...props} owner="Renan" /> } />
          <Route path='/strict-access' render={(props) => <StrictAccess {...props} username='joao' password='1234' />} />
        </Switch>
        <Link to='/strict-access' >Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;