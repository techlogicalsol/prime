import React from 'react';

import './App.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Movie from './Components/Movie';
import SportsCard from './Components/SportsCard';
import About from './Components/About'
import Contact from './Components/Contact'


function App() {
  return (
    <div>
      <NavBar />

      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movie} /> 
      <Route exact path="/sport" component={SportsCard} /> 
      <Route exact path="/about" component={About} /> 
      <Route exact path="/contact" component={Contact} /> 
      
      


      <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
