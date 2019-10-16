import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import RestaurantContainer from './containers/RestaurantContainer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={RestaurantContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
