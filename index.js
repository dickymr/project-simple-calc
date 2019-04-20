let firstDigit = ""
let secondDigit = ""
let operator = ""

const displayDigit = (num) => {
  const display = document.getElementById('input-display')
  if (operator === 'addition' || operator === 'substraction' || operator === 'multiplycation' || operator === 'division') {
    secondDigit += num
    display.value = secondDigit
  } else {
    firstDigit += num
    display.value = firstDigit
  }
}

const digit0 = () => {
  const num = document.getElementById('button-0').innerText
  displayDigit(num)
}

const digit1 = () => {
  const num = document.getElementById('button-1').innerText
  displayDigit(num)
}

const digit2 = () => {
  const num = document.getElementById('button-2').innerText
  displayDigit(num)
}
const digit3 = () => {
  const num = document.getElementById('button-3').innerText
  displayDigit(num)
}

const digit4 = () => {
  const num = document.getElementById('button-4').innerText
  displayDigit(num)
}
const digit5 = () => {
  const num = document.getElementById('button-5').innerText
  displayDigit(num)
}

const digit6 = () => {
  const num = document.getElementById('button-6').innerText
  displayDigit(num)
}
const digit7 = () => {
  const num = document.getElementById('button-7').innerText
  displayDigit(num)
}

const digit8 = () => {
  const num = document.getElementById('button-8').innerText
  displayDigit(num)
}

const digit9 = () => {
  const num = document.getElementById('button-9').innerText
  displayDigit(num)
}

const clearAll = () => {
  const display = document.getElementById('input-display')
  firstDigit = ""
  secondDigit = ""
  display.value = 0
  operator = ""
}

const addition = () => {
  const display = document.getElementById('input-display')
  display.value = 0
  operator = 'addition'
}

const substraction = () => {
  const display = document.getElementById('input-display')
  display.value = 0
  operator = 'substraction'
}

const multiplication = () => {
  const display = document.getElementById('input-display')
  display.value = 0
  operator = 'multiplycation'
}

const division = () => {
  const display = document.getElementById('input-display')
  display.value = 0
  operator = 'division'
}

const equal = () => {
  let result
  switch (operator) {
    case 'addition':
      result = parseInt(firstDigit) + parseInt(secondDigit)
      break;
    case 'substraction':
      result = parseInt(firstDigit) - parseInt(secondDigit)
      break;
    case 'multiplycation':
      result = parseInt(firstDigit) * parseInt(secondDigit)
      break;
    case 'division':
      result = parseInt(firstDigit) / parseInt(secondDigit)
      break;
    default:
      break;
  }
  const display = document.getElementById('input-display')
  display.value = result
}