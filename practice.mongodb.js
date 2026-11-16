use("Practicedb")
console.log(db);
db.createCollection("file")
// db.file.insertOne({
//     "name":"Abdullah",
//     "age":17,
//     "Class":"11"
// })
// db.file.insertMany([
//   {
//     name: "Abdullah",
//     age: 17,
//     Class: "11",
//   },
//   {
//     name: "Abdullah",
//     age: 17,
//     Class: "11",
//   },
//   {
//     name: "Abdullah",
//     age: 17,
//     Class: "11",
//   },
//   {
//     name: "Abdullah",
//     age: 17,
//     Class: "11",
//   },
//   {
//     name: "Abdullah",
//     age: 17,
//     Class: "11",
//   },
// ]);
// let a = db.file.findOne({age : 17})
// console.log(a);
// db.file.updateMany({age:17},{$set:{age:20}})
db.file.deleteMany({age:20})