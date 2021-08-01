'use strict'

const timeLineSlides = document.querySelectorAll('.time-line__item')
const placeForRender = document.querySelector('.time-line__brake-points')
const timeLineControl = document.querySelector('.controle-timeline')
let currentSlide = 1

function getPoints(Slides, counter = 1){
  let timeLinePoints = ''
  for (const slide of Slides) {
    let start = (counter === 1) ? 'time-line__brake-point-active' : null
    const point = `<div class="time-line__brake-point time-line__brake-point-${counter} ${start}">${counter}</div>`
    timeLinePoints += point
    counter++
  }
  return timeLinePoints
}

function pointsRender(placeForRender){
  placeForRender.insertAdjacentHTML("afterbegin", getPoints(timeLineSlides))
}

timeLineControl.addEventListener('click', (event) => {
  const target = event.target
  if (target.classList.contains('time-line__brake-point')){
    goToSlide(target)
  }
})

function goToSlide(target = '') {
  const targetSlide = 'time-line__item-' + getPoint(target)
  for (let slide of timeLineSlides) {
    if (slide.classList.contains(targetSlide)) {
      slide.classList.add('time-line__item-active')
    } else {
      slide.classList.remove('time-line__item-active')
    }
  }
}

function getPoint(target=``){
  const points = document.querySelectorAll('.time-line__brake-point')
  let point = 0
  for (let i = 1; i <= points.length; i++) {
    const nameClass = 'time-line__brake-point-' + i
    if (target && target.classList.contains(nameClass)) {
      point = currentSlide = i
      target.classList.add('time-line__brake-point-active')
    } else {
      points[i-1].classList.remove('time-line__brake-point-active')
      points[currentSlide-1].classList.add('time-line__brake-point-active')
      point = currentSlide
    }
  }
  currentSlide < timeLineSlides.length ?  currentSlide++ : currentSlide = 1
  return point
}
pointsRender(placeForRender)
setInterval(goToSlide, 10000)
