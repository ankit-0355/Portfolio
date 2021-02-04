import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing.js';
import AboutMe from './Aboutme.js';
import Contact from './Contact.js';
import Resume from './Resume.js';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;