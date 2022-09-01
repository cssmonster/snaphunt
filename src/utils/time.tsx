export const fakeDelayTime = (result: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};
