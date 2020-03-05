import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SingUpPage from './pages/SingUpPage';
import SingInPage from './pages/SingInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <HomePage/>
        </Route>

        <Route path="/sing_up">
          <SingUpPage/>
        </Route>

        <Route path={['sing_in', '/login']}>
          <SingInPage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
