var myDate = new Date()
console.log(myDate.toTimeString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())



//ARRAY
var Array=["sami","Rafi","safi","mohim"]
console.log(Array[1])

//push
var Array=["sami","Rafi","safi","mohim"]
Array.push("eti")
console.log(Array)

//pop
var Array=["sami","Rafi","safi","mohim"]
Array.pop()
console.log(Array)

//slice,splice
var Array=["sami","Rafi","safi","mohim"]


console.log(Array.slice(2,3))
Array.splice(1,3,"samiul")
console.log(Array)