import { createBoard } from "..";
const { board } = require("..");

describe(`Given the fucntion createBoard`, () => {
  describe(`When it recibes 5 & 5`, () => {
    test(`then it should return a 5 per 5 Board`, () => {
      const rows = 5;
      const columns = 5;

      const expectedResult = board;

      expect(createBoard(rows, columns)).toBe(expectedResult);
    });
  });
});
