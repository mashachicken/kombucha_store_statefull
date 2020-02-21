import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props) {


  return(
    <div>
    <h3> {props.flavor} </h3>
    </div>
  )
}
Kombucha.propTypes = {
  flavor: PropTypes.string.isRequired
}
  export default Kombucha;
