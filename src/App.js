import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Asteria from './components/Asteria';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="font-body antialiased">
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/asteria" component={Asteria}/>
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
