import React from 'react'

function GuessList(props) {
  const guesses = props.userGuesses.map((guess, index) => {
    return <li key={index}>{guess}</li>;
  })
  return (
    <ul className="guesses">
      {guesses}
    </ul>
  );
}
