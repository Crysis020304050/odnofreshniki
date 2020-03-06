import React                                      from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage                                   from './pages/HomePage.js';
import SignUpPage                                 from './pages/SignUpPage';
import SignInPage                                 from './pages/SignInPage';

function App () {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <HomePage/>
        </Route>


        <Route path="/sign_up">
          <SignUpPage/>
        </Route>

        <Route path={['/sign_in', '/login']}>
          <SignInPage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
