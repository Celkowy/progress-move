const divs = [...document.querySelectorAll('.div')]
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > 4) currentActive = 4
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) currentActive = 0
  update()
})

function update() {
  divs.forEach((div, index) => {
    if (index < currentActive) div.classList.add('active')
    else div.classList.remove('active')
  })
}
