import React from 'react';
import  Nav from './Nav';
import Kombuchas from './Kombuchas'
import NewKombucha from './NewKombucha';
import { Switch, Route } from 'react-router-dom';
import BodyImage from './BodyImage';
import AboutUs from './AboutUs';
import Contact from './Contact'
import Flavor from './Flavor'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchaList: []
    };
    this.handleAddingNewKombucha = this.handleAddingNewKombucha.bind(this)
  }
  handleAddingNewKombucha(newKombucha) {
    var newKombuchaList = this.state.masterKombuchaList.slice();
    newKombuchaList.push(newKombucha)
    this.setState({masterKombuchaList: newKombuchaList});
  }
  render() {
    return (
      <div>
      <Nav />
      <BodyImage/>
      <Switch>
      <Route path='/all-products' render={()=><Kombuchas
        kombuchaList={this.state.masterKombuchaList}/>} />
        <Route path='/{f.name}' component={Kombuchas} />
        <Route path='/new-kombucha' render={()=><NewKombucha onNewKombuchaSubmission={this.handleAddingNewKombucha} />} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/contact' component={Contact} />
        <Route path='/:flavorId' render={(match)=> <Flavor kombuchaList={this.state.masterKombuchaList} match={match}/>} />
        <Route component={Error404} />
        </Switch>
        </div>
      );
    }
  }

  export default App;
