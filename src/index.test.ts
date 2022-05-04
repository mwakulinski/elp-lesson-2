import {TurboNumber} from "./TurboNumber";

describe('TurboNumber', () => {
  let turboNumber: TurboNumber;

  beforeEach(() => {
    turboNumber = new TurboNumber(8);
  })
  it("subtract 2 from 5", () => {
    turboNumber.subtract(2)
    expect(turboNumber.result()).toBe(6)
  })

  it("subtract 3 from 8", () => {
    expect(turboNumber.subtract(3).result()).toBe(5)
  })

  it("divides 8 by 2", () => {
    expect(turboNumber.divide(2).result()).toBe(4)
  })

  it("throws when dividing by 0", () => {
    const turboNumber = new TurboNumber(8);
    expect(() => turboNumber.divide(0)).toThrow('Cannot divide by 0')
  })
})
