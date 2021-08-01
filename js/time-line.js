'use strict'

/**
 * for correct work time-line slider
 * all break-points must be numereted class like "time-line__breack-point-1"
 **/

const timeLineBrakePoint = document.querySelectorAll('.time-line__breack-point')

/**
 * for correct show time-line slide
 * all time-line item must be numereted class like "time-line__item-1"
 */

const timeLineSlide = document.querySelectorAll('.time-line__item')


const timeLineControl = document.querySelector('.controle-timeline')
let currentSlide = 1

timeLineControl.addEventListener('click', (event) => {
  const target = event.target
  checkBrakePoint(target)
})

function checkBrakePoint(target) {
  if (target.classList.contains('time-line__breack-point')) {
    goToBrakePoint(target)
  }
}

function goToBrakePoint(target) {
  const targetSlide = 'time-line__item-' + getBrakePoint(target)
  for (let i = 0; i < timeLineSlide.length; i++) {
    if (timeLineSlide[i].classList.contains(targetSlide)) {
      timeLineSlide[i].classList.add('time-line__item-active')
    } else {
      timeLineSlide[i].classList.remove('time-line__item-active')
    }
  }
}

function getBrakePoint(target) {
  let point = 0
  for (let i = 0; i < timeLineBrakePoint.length; i++) {
    let j = i + 1
    const nameClass = 'time-line__breack-point-' + j
    if (target.classList.contains(nameClass)) {
      point = i+1
      target.classList.add('time-line__breack-point-active')
    } else {
      timeLineBrakePoint[i].classList.remove('time-line__breack-point-active')
    }
  }
  return point
}

function goToPoint() {
  if (currentSlide > 9) {
    currentSlide = 1
  }
  const targetSlide = 'time-line__item-' + currentSlide
  for (let i = 0; i < timeLineSlide.length; i++) {
    if (timeLineSlide[i].classList.contains(targetSlide)) {
      timeLineSlide[i].classList.add('time-line__item-active')
    } else {
      timeLineSlide[i].classList.remove('time-line__item-active')
    }
  }
  for (let i = 0; i < timeLineBrakePoint.length; i++) {
    const nameClass = 'time-line__breack-point-' + currentSlide
    if (timeLineBrakePoint[i].classList.contains(nameClass)) {
      timeLineBrakePoint[i].classList.add('time-line__breack-point-active')
    } else {
      timeLineBrakePoint[i].classList.remove('time-line__breack-point-active')
    }
  }
  currentSlide++
}

function nextBrakePoint() {
  goToPoint()
}

setInterval(nextBrakePoint, 5000)
