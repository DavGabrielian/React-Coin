export const debounce = (callback, delay) => {
  let timeoutId = null;

  return (data) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(data);
      timeoutId = null;
    }, delay);
  };
};
