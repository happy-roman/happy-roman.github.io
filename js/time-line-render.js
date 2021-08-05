'use strict'

const timeLineSlides = document.querySelectorAll('.time-line__item')
const placeForRender = document.querySelector('.time-line__brake-points')
const timeLineControl = document.querySelector('.controle-timeline')
let point = 1;

function pointsRender() {
  placeForRender.insertAdjacentHTML("afterbegin", setPoints())
}

pointsRender()

const points = document.querySelectorAll('.time-line__brake-point')

function setPoints() {
  let timeLinePoints = ''
  timeLineSlides.forEach(el => {
    let start = (point === 1) ? 'time-line__brake-point-active' : ''
    const pointForRender = `<div class="time-line__brake-point time-line__brake-point-${point} ${start}">${point}</div>`
    timeLinePoints += pointForRender
    point++
  })
  point = 1
  return timeLinePoints
}

function goToSlide(target = '') {
  const targetSlide = 'time-line__item-' + getPoint(target)
  removeActivePoint()
  addActivePoint(point)
  for (let slide of timeLineSlides) {
    if (slide.classList.contains(targetSlide)) {
      slide.classList.add('time-line__item-active')
    } else {
      slide.classList.remove('time-line__item-active')
    }
  }
}

function removeActivePoint() {
  points.forEach(el => {
    if (el.classList.contains('time-line__brake-point-active')) {
      el.classList.remove('time-line__brake-point-active')
    }
  })
}

function addActivePoint(point) {
  const nameClass = 'time-line__brake-point-' + point
  points.forEach((el) => {
    if (el.classList.contains(nameClass)) {
      el.classList.add('time-line__brake-point-active')
    }
  })
}

function getPoint(target = ``) {
  if (target !== '')
    for (let i = 1; i <= points.length; i++) {
      const nameClass = 'time-line__brake-point-' + i
      if (target.classList.contains(nameClass)) {
        point = i
      }
    } else {
    point++
  }
  if (point > timeLineSlides.length) point = 1
  return point
}

timeLineControl.addEventListener('click', (event) => {
  const target = event.target
  if (target.classList.contains('time-line__brake-point')) {
    goToSlide(target)
  }
})

setInterval(goToSlide, 10000)
