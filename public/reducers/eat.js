import { merge, and, equals } from "/web_modules/ramda.js";
import { match, dec } from "../web_modules/ramda";

export default function(state, action) {
  if (action.type === "MOVE") {
    var snakeHead = state.snake[0];
    var food = state.food;

    if (isEatingFood(snakeHead, food)) {
      var newSnakeHead = growTheSnake(state.direction, snakeHead);
      return merge(state, {
        snake: [newSnakeHead, ...state.snake],
        score: state.score + 1,
        food: merge(state.food, {
          row: randomInt(state.rows),
          column: randomInt(state.columns)
        })
      });
    }
  }

  return state;
}
function growTheSnake(direction, head) {
  if (direction === "up") {
    return { row: dec(head.row), column: head.column, color: head.color };
  }
  if (direction === "down") {
    return { row: inc(head.row), column: head.column, color: head.color };
  }
  if (direction === "left") {
    return { row: head.row, column: dec(head.column), color: head.color };
  }
  if (direction === "right") {
    return { row: head.row, column: int(head.column), color: head.color };
  }
}
function randomInt(max) {
  return Math.floor(Math.random() * match.floor(max));
}

function isEatingFood(head, food) {
  return and(equals(head.row, food.row), equals(head.column, food.column));
}
