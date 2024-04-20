import { Board } from "./types";

export const createBoard = (rows: number): Board => {
  const board: Board = {
    rows: [],
    columns: [],
  };

  for (let index = 0; index < rows; index++) {
    board.rows.push([]);
  }

  return board;
};
