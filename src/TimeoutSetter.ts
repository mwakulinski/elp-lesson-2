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
