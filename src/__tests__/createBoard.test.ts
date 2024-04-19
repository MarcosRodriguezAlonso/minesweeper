import { createBoard } from "../index";
import { Board } from "../types";

describe(`Given the fucntion createBoard`, () => {
  describe(`When it recibes 5`, () => {
    test(`Then it should return a 5 per 0 board`, () => {
      const rows = 5;

      const board = createBoard(rows);

      const expectedBoard = {
        rows: 5,
        columns: 0,
        tiles: [],
      };

      expect(board).toBe(expectedBoard);
    });
  });
});
