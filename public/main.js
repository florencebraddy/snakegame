import render from "./render.js";
import game from "./game.js";

let el = document.getElementById("board");
let timeoutID = null;

game.subscribe(function() {
  const state = game.getState();
  if (!state.gameOver) {
    render(board, state);
    timeoutID = setTimeout(function() {
      game.dispatch({ type: "MOVE" });
    }, 50);
  }
});
// start
game.dispatch({ type: "MOVE" });

function handleKeyEvent(e) {
  game.dispatch({ type: "CHANGE_DIRECTION", payload: e.key });
}

window.addEventListener("keydown", handleKeyEvent);
