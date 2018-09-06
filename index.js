function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})



function moveDodgerRight() {
  var RightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(RightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})