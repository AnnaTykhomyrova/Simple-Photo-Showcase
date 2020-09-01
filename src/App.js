import React from 'react';
import { Router, Route } from 'react-router-dom';
import PhotoShowcase from "./containers/PhotoShowcase.jsx"
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={PhotoShowcase} />
    </Router>
  );
}

export default App;
