import React from 'react';
import availableProduce from '../produceSchedule.js';

function Kombuchas() {

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


  return (
    <div className="nav" >
   <header className="teslaHeader" style={navStyle}>
    <ul style={ulStyle}>
   {flavors.map((flav,i) => (
     <Link to="/{f.name}"></Link>
     <li>{f.name}</li>
     ))}
     </ul>
     </header>
     </div>
  )
]
}
export default Produce;
