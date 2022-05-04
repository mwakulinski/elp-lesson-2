export class TimeoutSetter {
  setTimeoutInSeconds(callback: () => void, seconds: number) {
    setTimeout(() => {
      callback();
    }, seconds * 1000);
  }
}
describe("test TimeoutSetter with ordinary callbacks", () => {
  it("should define class instance", () => {
    expect(new TimeoutSetter()).toBeDefined();
  });

  describe("test timeoutInSeconds", () => {
    it("should call callback", (done) => {
      const mockFunction = jest.fn();
      expect.assertions(1);

      const callback = () => {
        mockFunction();
        expect(mockFunction).toHaveBeenCalled();
        done();
      };

      new TimeoutSetter().setTimeoutInSeconds(callback, 2);
    });
  });

  it("should call callback at a specific time", (done) => {
    jest.useFakeTimers();
    const mockFunction = jest.fn();
    expect.assertions(2);

    const callback = () => {
      mockFunction();
      done();
    };

    new TimeoutSetter().setTimeoutInSeconds(callback, 1);
    jest.advanceTimersByTime(999);
    expect(mockFunction).not.toBeCalled();

    jest.advanceTimersByTime(1);
    expect(mockFunction).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });
});
