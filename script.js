'use strict'

document.getElementById('mybtn').addEventListener('click', calculatearea)

function calculatearea () {
  let a = 0
  let b = 0
  let height = 0
  let area = 0
  a = document.getElementById('a').value
  b = document.getElementById('b').value
  height = document.getElementById('height').value
  area = (a + b) * parseFloat(height)/2
  alert(area)
}
