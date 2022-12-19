function isUpperCase(word) {
  if (typeof word === "string") {
    const WORD = word.toLocaleUpperCase(); /*turns word into Uppercase*/
    if (word === WORD) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isUpperCase("HR JK"));
