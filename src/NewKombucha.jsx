import React from 'react';


function NewKombucha() {
  return (
  <form>
  <label>
  Flavor:
  <input type="text" className="flavor" />
  </label>
  <input type="submit" value="Submit" />
  </form>
)
}
export default NewKombucha;
