import React from 'react';
import  Nav from './Nav';
import Kombuchas from './Kombuchas'
import NewKombucha from './NewKombucha';
import { Switch, Route } from 'react-router-dom';
import BodyImage from './BodyImage';
import AboutUs from './AboutUs';
import Contact from './Contact'
import Pear from './Pear'

class App extends React.Component(){

  constructor(props) {
    super(props);
    this.state = {
      kombuchaList: []
    };
    this.handleAddingNewKombucha = thos.handleAddingNewKombucha.bind(this) 
  }
  handleAddingNewKombucha(NewKombucha) {
    var newKombuchaList = this.state.kombuchaList.slice();
    newKombuchaList.push(newKombucha)
    this.setState({kombuchaList: newKombuchaList});
  }
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
        <Route path='/contact' component={Contact} />
        <Route path='/pear' component={Pear} />
    </Switch>
    </div>
  );
}

export default App;
