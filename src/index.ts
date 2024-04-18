import { Tile, Board } from "./types";

const tile: Tile = {
  hasMine: false,
  minesArround: 0,
};

module.exports = tile;

const board: Board = {
  rows: 5,
  columns: 5,
};

module.exports = board;

export const createBoard = (rows: number, columns: number) => board;
