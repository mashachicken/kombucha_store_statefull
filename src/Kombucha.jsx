import React from 'react';
import PropTyes from 'prop-types';
import Kombucha from './Kombucha'

function Kombucha() {


  return(
    <h3> {props.flavor} </h3>
  )
Kombucha.propTpes = {
  flavor: PropTyes.string.isRequired
}
  export default Kombucha;
