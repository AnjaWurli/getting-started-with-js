function countSpaces(text) {
  if (typeof text === "string") {
    let x = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        x++;
      }
    }
    return x;
  }
}

console.log(countSpaces("db jz "));
