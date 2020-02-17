import React from 'react';
import  Nav from './Nav';
import Kombuchas from './Kombuchas'
import NewKombucha from './NewKombucha';
import { Switch, Route } from 'react-router-dom';
import BodyImage from './BodyImage';
import AboutUs from './AboutUs'

function App(){
  return (
    <div>
    <header className="App-header">
      <Nav />
      <BodyImage/>
    </header>
      <Switch>
        <Route path='/all-products' component={Kombuchas} />
        <Route path='/{f.name}' component={Kombuchas} />
        <Route path='/new-kombucha' component={NewKombucha} />
        <Route path='/about-us' component={AboutUs} />
    </Switch>
    </div>
  );
}

export default App;
