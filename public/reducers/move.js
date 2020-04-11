import { dropLast, equals, inc, dec, merge } from "/web_modules/ramda.js";
export default function(state, action) {
  if (action.type === "MOVE") {
    const moving = equals(state.direction);
    const snakeHead = state.snake[0];
    if (moving("right")) {
      const tip = {
        row: snakeHead.row,
        column: inc(snakeHead.column),
        color: "blue"
      };
      return merge(state, { snake: [tip, ...dropLast(1, state.snake)] });
    }
    if (moving("down")) {
      const tip = {
        row: inc(snakeHead.row),
        column: snakeHead.column,
        color: "blue"
      };
      return merge(state, { snake: [tip, ...dropLast(1, state.snake)] });
    }
    if (moving("up")) {
      const tip = {
        row: dec(snakeHead.row),
        column: snakeHead.column,
        color: "blue"
      };
      return merge(state, { snake: [tip, ...dropLast(1, state.snake)] });
    }
    if (moving("left")) {
      const tip = {
        row: snakeHead.row,
        column: dec(snakeHead.column),
        color: "blue"
      };
      return merge(state, { snake: [tip, ...dropLast(1, state.snake)] });
    }
  }
  return state;
}
