import React from 'react'

export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => {
    return <li key={index}>{guess}</li>;
  })
  return (
    <ul className="guesses">
      {guesses}
    </ul>
  );
}
