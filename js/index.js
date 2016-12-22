import store from './store'
import * as actions from './actions/index'

let randomNumber = Math.floor(Math.random() * 100);

store.dispatch(actions.setRandNum(randomNumber));
console.log(store.getState());
store.dispatch(actions.newGuess(50));
console.log(store.getState());
store.dispatch(actions.newGuess(randomNumber));
console.log(store.getState());
store.dispatch(actions.newGame());
console.log(store.getState());
