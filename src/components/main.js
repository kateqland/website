import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import Art from './art';
import Photography from './photography';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/personal-website' component={Home}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/photography' component={Photography}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/art' component={Art}></Route>
    </Switch>
  );
}


export default Main;