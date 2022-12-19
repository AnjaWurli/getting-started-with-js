/*function hasUmlauts(word) {
  if (typeof word === "string") {
    let x = 0;
    for (let i = 0; i < word.length; i++) {
      if (
        word[i] === "ä" ||
        word[i] === "ö" ||
        word[i] === "ü" ||
        word[i] === "Ü" ||
        word[i] === "Ä" ||
        word[i] === "Ö" ||
        word[i] === "ß"
      ) {
        x++;
      }
    }
    if (x > 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(hasUmlauts("DDGFH"));
*/

function hasUmlauts(word) {
  if (typeof word === "string") {
    const ä = "ä";
    const Ä = "Ä";
    const ü = "ü";
    const Ü = "Ü";
    const ö = "ö";
    const Ö = "Ö";
    const ß = "ß";

    if (
      word.includes(ä) ||
      word.includes(Ä) ||
      word.includes(ü) ||
      word.includes(Ü) ||
      word.includes(ö) ||
      word.includes(Ö) ||
      word.includes(ß)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(hasUmlauts("sö"));
