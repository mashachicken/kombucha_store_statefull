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
   <h1
   </header>
    <ul style={ulStyle}>
   {flavors.map((flav,i) => (
     <li><Link to="/{f.name}">{f.name}</Link></li>

     ))}
     </ul>
     <New/>
     </div>
  )
]
}
export default Produce;
