function Num (a, n) {
  if (n < 1 || a < 1 ) {
    console.log("error")
    return;
  } else {
    let result = Math.pow(a, n)
    console.log(result)
  }
}

Num(2, 5);