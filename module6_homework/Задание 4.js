let x = prompt("Введите первое число:")
let y = prompt("Введите второе число (должен быть больше первого):")
x = +x;
y = +y;
    
function count (from, to) {
      if (from > to) {
        console.log("Ошибка!") 
        return;
    } else if (from === 0 || to === 0) { 
        console.log("Ошибка!") 
        return;
    } 
  
  let timer = setInterval(function () {
      console.log(from)
    if (from == to) {
      clearInterval(timer)
    }
      from++
  }, 1000)
}

count(x, y)