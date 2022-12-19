function isPalindrome(text) {
  text = text.toLocaleLowerCase(); /*case insensitive*/
  let reverse = "";
  for (i = text.length - 1; i >= 0; i--) {
    /*still: index starts with 0!!!*/
    reverse += text[i];
  }
  if (reverse === text) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("taCocat"));
