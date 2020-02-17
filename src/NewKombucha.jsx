import React from 'react';


function NewKombucha() {
  return (
  <form>
  <label>
  <p>Suggest a custom flavor:</p>
  <input type="text" className="flavor" />
  </label>
  <input type="submit" value="Submit" />
  </form>
)
}
export default NewKombucha;
