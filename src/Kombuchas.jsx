import React from 'react';
import { Link } from 'react-router-dom';
import NewKombucha from './NewKombucha';
import Kombucha from './Kombucha';

function Kombuchas() {
  const font = {
    fontFamily: 'Monospace'
  }

  return (
    <div style={font}>
    props.kombuchas.map((flavor, index)=>
    <Kombucha flavor={kombucha.flavor}
    key={index}/>
  )}
  </div>
);
}
  Kombucha.propTypes = {
    kombuchaList: propTypes.array
  }

  export default Kombuchas;
