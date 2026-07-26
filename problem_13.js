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
  email: "nuralam@example.com",
};

// console.log(student.age)
for(let key in student){
    console.log(key, ':', student[key])
}
