const johnsData = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  city: "Hamburg",
  children: ["Mia", "Fynn"],
  hobbies: ["Football", "Playing Guitar"],
};

function fullName() {
  return johnsData.firstName + " " + johnsData.surName;
}
console.log(fullName());

function johnHasBirthday() {
  return (johnsData.age += 1);
}
console.log(johnHasBirthday());

function changeJohnsData(propName, propValue) {
  if (johnsData.hasOwnProperty(propName) === true) {
    johnsData[propName] = propValue;
  } else {
    console.log(
      "Sorry the passed in argument doesn't exists as a property in the johnsData object"
    );
  }
}
//changeJohnsData("firstName", "Kai");
//console.log(fullName());

// johnsData["surName"] = "Mia";
// johnsData.surName = "Mia";
