export const msToHMS = (ms: number | undefined): string => {
  if (ms === undefined) return "";

  const time = Math.round(ms / 1000);

  const hour = Math.floor(time / 60 / 60);
  const min = Math.floor(time / 60) % 60;
  const sec = Math.floor(time) % 60;

  if (hour === 0) {
    return `${("00" + min).slice(-2)}:${("00" + sec).slice(-2)}`;
  }
  return `${hour}:${("00" + min).slice(-2)}:${("00" + sec).slice(-2)}`;
};

// 単位を[Byte] から 適切な (例えば[KByte]や[MByte]など)に変換する
const prefixList = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
export const dataLength = (byte: number | undefined): string => {
  if (byte === undefined) return "";

  let num = byte;
  let prefixIndex = 0;

  while (num > 1000) {
    num = num / 1000;
    prefixIndex++;
  }

  return `${num.toFixed(1)} ${prefixList[prefixIndex]}B`;
};
