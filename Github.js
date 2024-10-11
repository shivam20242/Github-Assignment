//Q1 
//1
let input = [2,3,4,5];
input = input.map(element => {
   return element ** 2
})

console.log(input)

//2
let input2 = [1,2,3,4,5,6]
input2 = input2.filter(element =>{ 
    return element % 2 == 0
})
console.log(input2)

//3
let input3 = [5,10,15,20];
input3 = input3.reduce((sum , element) => {
    sum += element;
    return sum
}, 0)//here 0 will indicate sum = 0
console.log(input3)

//4
let input4 = [1,2,3,4,5]
input4 = input4.filter((element)=>{
    return element % 2==0;
})
console.log(input4)
input4 = input4.map((element) => {
    return element**2
})
console.log(input4)
input4 = input4.reduce((sumofsqaure, element)=>{
    sumofsqaure += element
    return sumofsqaure
}, 0)
console.log(input4)


//Q2
let arr = [10,20,30,40,50]
function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
function callback(element,index,array){
   console.log(`Element: ${element},index: ${index},array: ${array}`)
}
forEachCustom(arr,callback)