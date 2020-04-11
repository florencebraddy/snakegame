import { map, curry, compose } from "./web_modules/ramda.js";

const paintBoard = curry(function(ctx, state) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, state.rows * state.size, state.columns * state.size);
  return state;
});

const paintCell = curry(function(ctx, size, cell) {
  ctx.fillStyle = cell.color;
  ctx.fillRect(cell.column * size, cell.row * size, size, size);
  ctx.strokeStyle = "white";
  ctx.strokeRect(cell.column * size, cell.row * size, size, size);
});

const paintFood = curry(function(ctx, state) {
  paintCell(ctx, state.size, state.food);
  return state;
});

const paintSnake = curry(function(ctx, state) {
  map(paintCell(ctx, state.size), state.snake);
  return state;
});

const paintScore = curry(function(ctx, state) {
  ctx.fillStyle = "white";
  ctx.fillText("Score:" + state.score, 5, state.rows * state.size - 5);
  return state;
});

export default function(target, state) {
  //paint the board
  //paint the food
  //paint the snake
  //paint the score
  var ctx = target.getContext("2d");
  return compose(
    paintScore(ctx),
    paintFood(ctx),
    paintSnake(ctx),
    paintBoard(ctx)
  )(state);
}
