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
export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => {
  console.log('fewestGuesses in success action:', fewestGuesses);
  return {
    type: FETCH_FEWEST_GUESSES_SUCCESS,
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

// sync actions to handle POST requests
// for succes and error
export const SAVE_FEWEST_GUESSES_SUCCESS = 'SAVE_FEWEST_GUESSES_SUCCESS';
export const saveFewestGuessesSuccess = (message, fewestGuesses) => {
  return {
    type: SAVE_FEWEST_GUESSES_SUCCESS,
    message,
    fewestGuesses
  };
};

export const SAVE_FEWEST_GUESSES_ERROR = 'SAVE_FEWEST_GUESSES_ERROR';
export const saveFewestGuessesError = (error) => {
  return {
    type: SAVE_FEWEST_GUESSES_ERROR,
    error
  }
}

// async GET request to server
export const fetchFewestGuesses = () => dispatch => {
  const url = '/fewest-guesses';
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
export const saveFewestGuesses = (numberOfGuesses) => dispatch => {
  console.log('Number of guesses in async function:', numberOfGuesses);
  const url = '/fewest-guesses';
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ numberOfGuesses: numberOfGuesses }),
    headers: new Headers({ "Content-Type": "application/json"})
  }).then( response => response.json())
    .then( data => {
      console.log('Data in saveFewestGuesses', data);
      dispatch(saveFewestGuessesSuccess(data.message, data.fewestGuesses));
    }).catch( error => {
      console.log(error);
      dispatch(saveFewestGuessesError(error));
    });
};
