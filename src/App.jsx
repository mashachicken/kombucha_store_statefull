import React from 'react';
import Header from './Header';
import  from './';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={} />
    </Switch>
    </div>
  );
}

export default App;
