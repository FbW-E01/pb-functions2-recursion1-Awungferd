/* ### Calculate the sum of natural number up to n
* Write a JavaScript program to compute the sum of an array of integers*/


const array = [1, 2, 3, 4, 5, 6, 300, 45000];
function summingUp (array){
    if (array.length===0) return 0
    const lastNumber = array.pop()
    console.log(lastNumber)
    console.log(array)
return lastNumber + summingUp(array)
}
console.log(summingUp(array))




