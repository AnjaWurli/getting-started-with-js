describe("johnsData Function Tests", function () {
  let sandbox;
  let log;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    sandbox.restore();
    log = sandbox.spy(console, "log");
  });

  it("contains a property firstName with the value John", function () {
    chai.expect(johnsData).to.include({ firstName: "John" });
  });

  it("contains a property surName with the value Doe", function () {
    chai.expect(johnsData).to.include({ surName: "Doe" });
  });

  it("contains a property age with the value 28", function () {
    chai.expect(johnsData).to.include({ age: 28 });
  });

  it("contains a property city with the value Hamburg", function () {
    chai.expect(johnsData).to.include({ city: "Hamburg" });
  });

  it("contains a property children with the values Mia, Fynn", function () {
    chai.expect(johnsData.children).to.eql(["Mia", "Fynn"]);
  });

  it("contains a property hobbies with the values Football, Playing Guitar", function () {
    chai.expect(johnsData.hobbies).to.eql(["Football", "Playing Guitar"]);
  });

  it("the function fullName returns John Doe", function () {
    chai.expect(fullName()).to.equal("John Doe");
  });

  it("the function johnHasBirthday increases John's age by one", function () {
    johnHasBirthday();
    chai.expect(johnsData.age).to.equal(johnsData.age + 1);
  });
});
