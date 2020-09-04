import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

