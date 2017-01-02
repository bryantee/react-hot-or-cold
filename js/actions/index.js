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

// sync actions to call after async response from server
// set's fewestGuesses state
export const FETCH_FEWEST_GUESSES_SCUCCESS = 'FETCH_FEWEST_GUESSES_SCUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => {
  console.log('fewestGuesses in success action:', fewestGuesses);
  return {
    type: FETCH_FEWEST_GUESSES_SCUCCESS,
    fewestGuesses
  };
};

// sync action to handle response
// throw error if fetch fails
export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (error) => {
  return {
    type: FETCH_FEWEST_GUESSES_ERROR,
    error
  };
};

// async GET request to server
export const fetchFewestGuesses = () => dispatch => {
  const url = 'http://127.0.0.1:8080/fewest-guesses';
  return fetch(url).then( response => {
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    console.log('Response during fetch:', response);
    return response;
  }).then( response => response.json())
    .then( data => {
      dispatch(fetchFewestGuessesSuccess(data.fewestGuesses))
    }).catch( error => {
      dispatch(fetchFewestGuessesError(error));
      console.log(error);
    });
};

// async POST request to server
