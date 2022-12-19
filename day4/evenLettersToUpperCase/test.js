describe("evenLettersToUpperCase Function Tests", function () {
  it("returns a string", function () {
    chai.expect(evenLettersToUpperCase("Foobar")).to.be.a("string");
  });

  it("every even letter is uppercase", function () {
    chai.expect(evenLettersToUpperCase("Foobar")).to.equal("fOoBaR");
    chai.expect(evenLettersToUpperCase("FOOBAR")).to.equal("fOoBaR");
    chai.expect(evenLettersToUpperCase("Anna")).to.equal("aNnA");
  });

  it("returns nothing when no parameter was used", function () {
    chai.expect(evenLettersToUpperCase()).to.be.undefined;
  });
});
