const formatDate = (fn) => {
  return fn > 9 ? fn : `0${fn}`;
};

export const getCurrentTime = () => {
  const date = new Date();
  const day = formatDate(date.getDate());
  const month = formatDate(date.getMonth() + 1);
  const year = formatDate(date.getFullYear());

  const hour = formatDate(date.getHours());
  const minute = formatDate(date.getMinutes());
  const seconds = formatDate(date.getSeconds());

  return `${day}.${month}.${year} ${hour}:${minute}:${seconds}`;
};

export const handleKeyPress = (event, key, callback) => {
  if (event.key === key) {
    callback();
  }
};
