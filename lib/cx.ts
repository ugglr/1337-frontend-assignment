export const cx = (classNamesArray: Array<string | boolean>) => {
  // filter out potential booleans
  const arr = classNamesArray.filter((c) => typeof c !== "boolean");
  return arr.join(" ");
};
