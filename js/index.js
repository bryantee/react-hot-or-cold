
import store from './store'
import * as actions from './actions/index'

store.dispatch(actions.setRandNum(Math.floor(Math.random() * 100)));
console.log(store.getState());
