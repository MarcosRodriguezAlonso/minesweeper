import { createBoard } from "../index";

describe(`Given the fucntion createBoard`, () => {
  describe(`When it recibes 3 rows`, () => {
    test(`Then it should return a 3 rows boards`, () => {
      const rows = 3;
      const expectedBoard = {
        rows: [[], [], []],
        columns: [],
      };

      const createdBoard = createBoard(rows);

      expect(createdBoard).toEqual(expectedBoard);
    });
  });
});
