export class TurboNumber {
  constructor(private number: number) {
  }

  subtract(number: number) {
    this.number = this.number - number
    return this;
  }

  result(): number {
    return this.number;
  }

  divide(number: number) {
    if (number === 0) throw new Error('Cannot divide by 0')
    this.number = this.number / number;
    return this;
  }
}