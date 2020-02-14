import React from 'react';
import  Nav from './Nav';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
    <header className="App-header">
      <Nav />
    </header>
      <Switch>
        <Route exact path='/' component={} />
        <Route path='/all-products' component={Kombuchas} />
    </Switch>
    </div>
  );
}

export default App;
