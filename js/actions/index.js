// ACTIONS

// generate random number
export const SET_RAND_NUM = 'SET_RAND_NUM';
export const setRandNum = number => ({
  type: SET_RAND_NUM,
  number
});

// start new game
export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type:NEW_GAME
});

// make guess
export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = (userGuess) => ({
  type: NEW_GUESS,
  userGuess
});

// Inform player of correct guess
export const CORRECT_GUESS = 'CORRECT_GUESS';
export const correctGuess = (userGuess) => ({
  type: CORRECT_GUESS,
  userGuess
});

// Inform player of incorrect guess
export const INCORRECT_GUESS = 'INCORRECT_GUESS';
export const incorrectGuess = (userGuess) => ({
  type: INCORRECT_GUESS,
  userGuess
});
