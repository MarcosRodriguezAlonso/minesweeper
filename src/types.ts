export interface Tile {
  hasMine: boolean;
  minesArround: number;
}

export interface Board {
  rows: number;
  columns: number;
}
