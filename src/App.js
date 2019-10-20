import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Contributing from './components/Contributing';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Landing} />
      <Route exact path="/contributing"  component={Contributing}/>
      <Route exact path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
