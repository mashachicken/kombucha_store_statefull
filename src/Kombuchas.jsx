import React from 'react';
import { Link } from 'react-router-dom';
import NewKombucha from './NewKombucha';

function Kombuchas() {
  const font = {
    fontFamily: 'Monospace'  
  }
  const flavors  = [
    {
      flavor: 'original',
      flavor: 'bluberry',
      flavor: 'lemon pie',
      flavor: 'green tea peach ',
      flavor: 'mint lime mojito',
      flavor: 'apple cider',
      flavor: 'mango',
      flavor: 'zingy raspberry',
      flavor: 'pear'
    }
  ];

  return (
    <div style={font}>
    <ul>
    {flavors.map((flav,i) => (
     <a key={i} href={`http://localhost:3000/#/${flav.flavor}`}>
       <li key={i}> {flav.flavor} </li>
       </a>

     ))}
     </ul>
     <NewKombucha/>

     </div>
  )
}
export default Kombuchas;
