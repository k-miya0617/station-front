export const msToHMS = (ms: number): string => {
  /*
  const hour = Math.floor(ms / 3600000);
  const min = Math.floor((ms - hour * 3600000) / 60000);
  // const sec = Math.floor(ms - (hour * 3600000 + min * 60000)) / 1000;
  const sec = Math.floor((ms - (hour * 3600000 + min * 60000)) / 100);
  */

  const time = Math.round(ms / 1000);

  const hour = Math.floor(time / 60 / 60);
  const min = Math.floor(time / 60) % 60;
  const sec = Math.floor(time) % 60;

  /*
  if (hour === 0) {
    return `${("00" + min).slice(-2)}:${("00" + sec).slice(-2)}`;
  }
  return `${hour}:${("00" + min).slice(-2)}:${("00" + sec).slice(-2)}`;
  */
  return `${hour}:${min}:${sec}`;
};
