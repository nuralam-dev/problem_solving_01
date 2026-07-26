let student = {
  name: "Nur Alam",
  age: 22,
  gender: "Male",
  country: "Bangladesh",
  city: "Chattogram",
  university: "Programming Hero",
  course: "Web Development",
  isStudent: true,
  phone: "01712345678",
};

function objOperation(obj) {
  // for key
  for (let key in obj) {
    console.log(key);
  }
  //   for value
  for (let key in obj) {
    console.log(obj[key]);
  }
  // key and value both
  for (let key in obj) {
    console.log(key, ":", obj[key]);
  }
  //   create a array
  let objectCount = Object.keys(obj).length;
  console.log("total properties", ":", objectCount);
  //   check there is any properties has
  let hasEmail = obj.hasOwnProperty("email");
  console.log("has email", hasEmail);
}
objOperation(student);
