'use strict';
import * as actions from '../actions/index'

const initialState = {
  randomNumber: null,
  guesses: [],
  correctGuess: false
};

const quizReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.SET_RAND_NUM:
      return {...state, randomNumber: action.randomNumber };
    case actions.NEW_GAME:
      return {...initialState};
    case actions.NEW_GUESS:
      let guesses = state.guesses.concat(action.userGuess);
      let correctGuess = false;
      if (state.randomNumber === action.userGuess) correctGuess = true;
      return {...state, guesses: guesses, correctGuess: correctGuess};
  }
  return state;
}

export default quizReducer;
