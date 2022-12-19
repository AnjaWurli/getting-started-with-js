describe("isUpperCase function tests", function () {
  it("returns a true when the string is uppercase", function () {
    chai.expect(isUpperCase("HELLO")).to.be.true;
    chai.expect(isUpperCase("FOO BAR")).to.be.true;
    chai.expect(isUpperCase("FOO BAR BAZ")).to.be.true;
    chai.expect(isUpperCase("F00B4R")).to.be.true;
    chai.expect(isUpperCase("F00_B4R")).to.be.true;
    chai.expect(isUpperCase("1337")).to.be.true;
    chai.expect(isUpperCase("/ G () K X 2!!! #")).to.be.true;
  });

  it("returns false when the string is not complete uppercase", function () {
    chai.expect(isUpperCase("heLLO")).to.be.false;
    chai.expect(isUpperCase("FOO bAR")).to.be.false;
    chai.expect(isUpperCase("FOO BaR BAZ")).to.be.false;
    chai.expect(isUpperCase("f00B4R")).to.be.false;
    chai.expect(isUpperCase("F00_B4r")).to.be.false;
    chai.expect(isUpperCase("/ G () k X 2!!! #")).to.be.false;
    chai.expect(isUpperCase("fooBAR")).to.be.false;
  });

  it("returns nothing when no parameter was used", function () {
    chai.expect(isUpperCase()).to.be.undefined;
  });
});
