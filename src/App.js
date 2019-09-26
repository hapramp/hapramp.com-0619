import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Asteria from './components/Asteria';
import Home from './components/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="font-body antialiased">
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/asteria" component={Asteria}/>
        </Switch>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
