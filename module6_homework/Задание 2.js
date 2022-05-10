let userNumber = prompt("Введите число от 0 до 1000:")

function numFilter (num) {
if (num > 1000) {
   console.log("Ошибка!")
   return;
} 

for (let i = 2; i < num; i++) {
  if (num % i === 0 && i !== num) {
    console.log(`${userNumber} не простое число`)
    break
  } else {
    console.log(`${userNumber} простое число`)
    break
    }
  }
}

numFilter(userNumber)