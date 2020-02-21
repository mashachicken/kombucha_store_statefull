import React from 'react';


function NewKombucha() {
  return (
    <div>
    <form onSubmit={handleNewTicketFormSubmission}

    <p>Suggest a custom flavor:</p>
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
export default NewKombucha;
