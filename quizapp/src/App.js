import React from 'react';
import Home from './Components/Home'
import Instructions from './Components/Instructions'
import Quiz from './Components/Quiz'
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import './App.css';
import Scores from './Components/Scores';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/play/instructions" component={Instructions} />
          <Route path="/play/quiz" exact component={Quiz} />
          <Route path="/play/results" exact component={Scores} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
