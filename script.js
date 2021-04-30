let number = 0
let sentence = 'this is the number 4'

document.getElementById('button').addEventListener('click', addition)

function addition () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * 3

  alert(number)
}
