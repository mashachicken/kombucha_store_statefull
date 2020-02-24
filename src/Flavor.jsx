import React from 'react';
import NewKombucha from './NewKombucha';
import Kombuchas from './Kombuchas';
import PropTypes from 'prop-types';
import Kombucha from './Kombucha';
import { v4 } from 'uuid';

function Flavor(props, {match}) {
  const flavor = props.kombuchaList.find(({ id }) => id === match.params.flavorId)
  const font = {
    fontFamily: 'Monospace'
  }
  return (
    <div style={font}>
      <h3> Masha's  Kombucha</h3>
      <p> Our best seller has a perfect balance of aromatic sweet pear an earthy taste of oolong tea. Masha's Kombucha Pear flavored kombucha is fun and functional and tastes smoother than any other kombucha. Fermented with our standardized proprietary culture and our unique process, our kombucha is non-alcoholic and has the goodness of tea and organic acids.</p>
    </div>
  )
}
Kombucha.propTypes = {
  kombuchaList: PropTypes.array
}
export default Flavor
