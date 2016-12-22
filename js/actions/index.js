// ACTIONS

// generate random number
export const SET_RAND_NUM = 'SET_RAND_NUM';
export const setRandNum = (randomNumber) => ({
  type: SET_RAND_NUM,
  randomNumber
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
