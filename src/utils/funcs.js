export const genRandArray = (n, min, max) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * max) + min);
  }
  return arr;
};
export const xFromTranslate = (val = "") => {
  let prop = val.match(/translatex\(-?\d+.*?\)/i)?.[0] ?? "0";
  let x = prop?.match(/-?\d+/)[0] ?? 0;
  return +x;
};
