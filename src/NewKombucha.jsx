import React from 'react';
import PropTypes from 'prop-types';

function NewKombucha(props) {
  let _flavor = null;

  function handleNewKombuchaSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaSubmission({flavor: _flavor.value});
     _flavor.value = '';
  }
  return(
    <div>
    <form onSubmit={handleNewKombuchaSubmission}>

    <input
    type="text"
    className="flavor"
    placeholder="flavor"
    ref={(input) => {_flavor = input;}}/>

    <button type="submit"> Sumbit </button>
    </form>
    </div>
  )
}

NewKombucha.propTypes = {
  onNewKombuchaSubmission: PropTypes.func
};
export default NewKombucha;
