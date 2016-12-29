'use strict';
import * as actions from '../actions/index'

const initialState = {
  randomNumber: Math.floor(Math.random() * 100),
  guesses: [],
  correctGuess: false,
  message: ''
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
      return {...state, guesses: guesses, correctGuess: correctGuess};
  }
  return state;
}

export default quizReducer;
