export default {
  rows: 40,
  columns: 40,
  size: 10,
  direction: "right",
  gameOver: false,
  score: 0,
  food: {
    row: 10,
    column: 10,
    color: "green"
  },

  snake: [
    { row: 0, column: 3, color: "blue" },
    { row: 0, column: 2, color: "blue" },
    { row: 0, column: 1, color: "blue" },
    { row: 0, column: 0, color: "blue" }
  ]
};
