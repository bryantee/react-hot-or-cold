'use strict';
import * as actions from '../actions/index'

const initialState = {
  randomNumber: Math.floor(Math.random() * 100),
  guesses: [],
  correctGuess: false,
  message: '',
  fewestGuesses: ''
};

const quizReducer = (state, action) => {
  if (!state) state = {...initialState}
  console.log(`Random number: ${state.randomNumber}`);
  switch (action.type) {
    case actions.SET_RAND_NUM:
      return {...state, randomNumber: action.randomNumber };
    case actions.NEW_GAME:
      return {...initialState, randomNumber: Math.floor(Math.random() * 100)};
    case actions.NEW_GUESS:
      let guesses = state.guesses.concat(action.userGuess);
      let correctGuess = false;
      if (state.randomNumber === parseInt(action.userGuess)) correctGuess = true;
      let difference = Math.abs(state.randomNumber - action.userGuess);
      if (difference <= 10) state.message = 'Very hot!';
      else if (difference <= 25) state.message = 'Warm!';
      else if (difference < 50 ) state.message = 'Cold!';
      else state.message = 'Freezing!';
      return {...state, guesses: guesses, correctGuess: correctGuess};
    case actions.FETCH_FEWEST_GUESSES_SCUCCESS:
      return {...initialState, fewestGuesses: action.fewestGuesses };
  }
  return state;
}

export default quizReducer;
