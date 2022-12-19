describe("stringLength Function Tests", function () {
  it("returns a integer", function () {
    chai.expect(stringLength("Foobar")).to.be.a("number");
    chai.expect(Number.isInteger(stringLength("Foobar"))).to.be.true;
  });

  it("returns the expected length of a string", function () {
    chai.expect(stringLength("Foobar")).to.equal("Foobar".length);
  });

  it("returns nothing when no parameter was used", function () {
    chai.expect(stringLength()).to.be.undefined;
  });
});
