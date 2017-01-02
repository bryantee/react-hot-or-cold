import React, { PropTypes } from 'react'

const FewestGuesses = (props) => {
  return (
    <div>
      <p>Fewest Guesses: {props.fewestGuesses}</p>
    </div>
  );
};

export default FewestGuesses;
