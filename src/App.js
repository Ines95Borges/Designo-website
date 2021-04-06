import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import AppDesign from './pages/AppDesign';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import Locations from './pages/Locations';
import WebDesign from './pages/WebDesign';
import {BrowserRouter, Route} from 'react-router-dom';
import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/appdesign" exact component={AppDesign}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/graphicsdesign" exact component={GraphicDesign}/>
      <Route path="/locations" exact component={Locations}/>
      <Route path="/webdesign" exact component={WebDesign}/>
    </BrowserRouter>
  );
}

export default App;
