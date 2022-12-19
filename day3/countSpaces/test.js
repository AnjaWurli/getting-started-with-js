describe("countSpaces Function Tests", function () {
  it("returns a integer", function () {
    chai.expect(countSpaces("Foo bar")).to.be.a("number");
    chai.expect(Number.isInteger(countSpaces("Foo bar"))).to.be.true;
  });

  it("returns the expected length of a string", function () {
    chai.expect(countSpaces("Foo bar")).to.equal(1);
    chai.expect(countSpaces("Foo bar baz")).to.equal(2);
    chai.expect(countSpaces("F o o b a r")).to.equal(5);
  });

  it("returns nothing when no parameter was used", function () {
    chai.expect(countSpaces()).to.be.undefined;
  });
});
