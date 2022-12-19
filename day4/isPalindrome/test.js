describe("isPalindrome Function Tests", function () {
  it("returns true if the passed in argument is a palindrom", function () {
    chai.expect(isPalindrome("abba")).to.be.true;
    chai.expect(isPalindrome("lagerregal")).to.be.true;
    chai.expect(isPalindrome("anna")).to.be.true;
    chai.expect(isPalindrome("otto")).to.be.true;
  });

  it("the function is case insensitive", function () {
    chai.expect(isPalindrome("Abba")).to.be.true;
    chai.expect(isPalindrome("AbBa")).to.be.true;
    chai.expect(isPalindrome("ABBA")).to.be.true;
    chai.expect(isPalindrome("LagerRegal")).to.be.true;
  });

  it("returns false if the passed in argument is NOT a palindrom", function () {
    chai.expect(isPalindrome("Foobar")).to.be.false;
    chai.expect(isPalindrome("Erbeere")).to.be.false;
    chai.expect(isPalindrome("AnnaBell")).to.be.false;
    chai.expect(isPalindrome("Käse")).to.be.false;
  });
});
