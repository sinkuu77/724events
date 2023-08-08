import { getMonth, MONTHS } from './index'

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      const date = new Date("2022-01-01");
      expect(getMonth(date)).toBe(MONTHS[1]);
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      const date = new Date("2022-07-08");
      expect(getMonth(date)).toBe(MONTHS[7]);
    });
  });
});
