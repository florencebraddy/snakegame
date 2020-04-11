import { clone, merge, append, map, reduce } from "/web_modules/ramda.js";
import initialState from "./initial-state.js";
import move from "./reducers/move.js";
import gameOver from "./reducers/game-over.js";
import direction from "./reducers/direction.js";
import eat from "./reducers/eat.js";

var state = initialState;
var functionsToNotify = [];
function doNotify(fn) {
  fn();
}
export default {
  getState() {
    return state;
  },
  subscribe(fn) {
    functionsToNotify = append(fn, functionsToNotify);
  },
  dispatch(action) {
    state = combineReducers(gameOver, move, direction, eat)(state, action);
    map(doNotify, functionsToNotify);
    return null;
  }
};
function combineReducers(...fns) {
  return function(state, action) {
    function reducer(acc, fn) {
      return fn(acc, action);
    }
    return reduce(
      reducer,
      state /* initial value */,
      fns.reverse() /*array fns*/
    );
  };
}
