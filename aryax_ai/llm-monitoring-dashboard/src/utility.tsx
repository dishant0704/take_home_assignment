export const fetchPromise = (
  data: Array<{ timeStamp: string; tokens: number }>
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    },1000)
  }
)};
