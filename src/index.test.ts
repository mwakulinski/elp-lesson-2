export class TimeoutSetter {
  setTimeoutInSeconds(callback: () => void, seconds: number) {
    setTimeout(() => {
      callback();
    }, seconds * 1000);
  }

  setTimeoutInMinutes(callback: () => void, minutes: number) {
    this.setTimeoutInSeconds(callback, minutes * 60);
  }
  setTimeoutInSecondsPromise(callback: () => void, seconds: number) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve(callback());
      }, seconds * 1000);
    });
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

  describe("test setTimeoutInMinutes", () => {
    it("should call callback", (done) => {
      const mockFunction = jest.fn();
      expect.assertions(1);

      const callback = () => {
        mockFunction();
        expect(mockFunction).toHaveBeenCalled();
        done();
      };

      new TimeoutSetter().setTimeoutInMinutes(callback, 0.01);
    });

    it("should call callback at a specific time", (done) => {
      jest.useFakeTimers();
      const mockFunction = jest.fn();

      const callback = () => {
        mockFunction();
        done();
      };

      new TimeoutSetter().setTimeoutInMinutes(callback, 1);
      jest.advanceTimersByTime(60 * 1000 - 1);
      expect(mockFunction).not.toBeCalled();

      jest.advanceTimersByTime(1);
      expect(mockFunction).toBeCalledTimes(1);
      jest.useRealTimers();
    });
  });

  describe("test TimeoutSetter with promises", () => {
    describe("test timeoutInSecondsPromise", () => {
      it("should call callback", async () => {
        const mockFunction = jest.fn();
        expect.assertions(1);

        const callback = () => {
          mockFunction();
        };

        await new TimeoutSetter().setTimeoutInSecondsPromise(callback, 1);
        expect(mockFunction).toBeCalled();
      });

      it("should call callbacks at a specific time", async () => {
        jest.useFakeTimers();
        const mockFunction = jest.fn();
        expect.assertions(2);

        const callback = () => {
          mockFunction();
        };

        new TimeoutSetter().setTimeoutInSecondsPromise(callback, 1).then(() => {
          expect(mockFunction).toBeCalledTimes(1);
        });

        jest.advanceTimersByTime(999);
        expect(mockFunction).not.toBeCalled();
        jest.advanceTimersByTime(1);
        jest.useRealTimers();
      });
    });
  });
});
