import { merge } from "/web_modules/ramda.js";

export default function(state, action) {
  if (action.type === "MOVE") {
    const snakeHead = state.snake[0];
    if (snakeHead.column < 0 || snakeHead.column > state.columns) {
      return merge(state, { gameOver: true });
    }
    if (snakeHead.row < 0 || snakeHead.row > state.rows) {
      return merge(state, { gameOver: true });
    }
  }
  return state;
}
