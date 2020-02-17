import React from 'react';

function BodyImage() {

  const imgStyle = {
    height: '550px',
    width: '100%'

  }
  const imageWrapper = {
    position: 'relative'
  }
  const parag = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: "41px",
    color: 'white',
    fontFamily: 'Monospace',
    fontStyle: 'italic'
  }
  return (
    <div style={imageWrapper}>
      <img src="/kombucha.jpeg" style={imgStyle}/>
      <p style={parag}> Portland's best kombucha</p>
    </div>
  );
}
export default BodyImage;
