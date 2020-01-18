import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Available from './Pages/Available';
import NewHouse from './Pages/NewHouse';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/available' component={Available} />
          <Route exact path='/new' component={NewHouse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
