function evenLettersToUpperCase(text) {
  if (typeof text === "string") {
    let result = "";
    let textUp = text.toLocaleUpperCase();
    let textLow = text.toLocaleLowerCase();

    for (i = 0; i < text.length; i++) {
      if (i % 2 !== 0) {
        /* Index starts with 0!!*/
        result += textUp[i];
      } else {
        result += textLow[i];
      }
    }
    return result;
  }
}
console.log(evenLettersToUpperCase("sd"));
