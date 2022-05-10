function FirstNum (num1) {
  return function (num2) {
    return num1 + num2
  }
}

FirstNum(2)(10)