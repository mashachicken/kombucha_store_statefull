import React from 'react';
import PropTyes from 'prop-types';

function NewKombucha() {
  let _flavor = null;

  function handleNewKombuchaSubmission(event) {
    event.preventDefault();
    console.log(_flavor.value)
     _flavor.value = '';
  }
  return (
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
  NewKombucha: PropTypes.func
}
export default NewKombucha;
