import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Kombucha(props) {


  return(
    <div>
    <h3> <Link to={props.flavor}> {props.flavor} </Link> </h3>
    </div>
  )
}
Kombucha.propTypes = {
  flavor: PropTypes.string.isRequired
}
  export default Kombucha;
