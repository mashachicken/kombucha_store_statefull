import React from 'react';
import { Link } from 'react-router-dom';
import NewKombucha from './NewKombucha';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function Kombuchas(props) {
    const font = {

    }
  return (
    <div style={font}>
    {props.kombuchaList.map((kombucha)=>
    <Kombucha flavor={kombucha.flavor}
    key={kombucha.id}/>
  )}
  <Link to="/new-kombucha"> Add new flavor </Link>
  </div>
);
}
  Kombucha.propTypes = {
    kombuchaList: PropTypes.array
  }

  export default Kombuchas;
