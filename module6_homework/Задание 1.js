let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, undefined]
let zero = []
let even = []
let odd = []
function SORT_ARR (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == null || undefined) {
      zero.push(array[i])
    } else if (array[i] % 2) {
      odd.push(array[i])
    } else {
      even.push(array[i])
    }
  }
}

SORT_ARR(numberArr )
console.log(zero)
console.log(odd)
console.log(even)