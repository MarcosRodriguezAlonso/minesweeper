import { Board } from "./types";
import { Tile } from "./types";

export const tile: Tile = {
  hasMine: false,
  minesArround: 0,
};

export const board: Board = {
  rows: 5,
  columns: 5,
};

export const createBoard = (rows: number, columns: number): Board => board;
