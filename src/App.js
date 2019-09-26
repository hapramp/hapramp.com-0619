import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Asteria from './components/Asteria';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="font-body antialiased">
      <BrowserRouter >
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/asteria" component={Asteria}/>
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
          </Switch>
        </ScrollToTop>
        
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
