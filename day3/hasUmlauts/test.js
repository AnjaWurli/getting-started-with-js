describe("hasUmlauts function tests", function () {
  it("returns a true when the string contains umlauts", function () {
    chai.expect(hasUmlauts("Fürst")).to.be.true;
    chai.expect(hasUmlauts("Straßenbahn")).to.be.true;
    chai.expect(hasUmlauts("Räuber")).to.be.true;
    chai.expect(hasUmlauts("Mörtel")).to.be.true;
  });

  it("is case insensitive", function () {
    chai.expect(hasUmlauts("fürst")).to.be.true;
    chai.expect(hasUmlauts("FÜRST")).to.be.true;
    chai.expect(hasUmlauts("straßenbahn")).to.be.true;
    chai.expect(hasUmlauts("STRAßENBAHN")).to.be.true;
    chai.expect(hasUmlauts("räuber")).to.be.true;
    chai.expect(hasUmlauts("RÄUBER")).to.be.true;
    chai.expect(hasUmlauts("MÖRTEL")).to.be.true;
    chai.expect(hasUmlauts("mörtel")).to.be.true;
    chai.expect(hasUmlauts("KAESE")).to.be.false;
    chai.expect(hasUmlauts("OEL")).to.be.false;
  });

  it("returns false when the string is not complete uppercase", function () {
    chai.expect(hasUmlauts("Kaese")).to.be.false;

    chai.expect(hasUmlauts("Oel")).to.be.false;
    chai.expect(hasUmlauts("Strasse")).to.be.false;
  });

  it("returns nothing when no parameter was used and the parameter is not a string", function () {
    chai.expect(hasUmlauts()).to.be.undefined;
  });
});
