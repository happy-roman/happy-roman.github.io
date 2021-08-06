'use strict'
const settings = {
  slides: '.time-line__item',
  place: '.time-line__brake-points',
  control: '.controle-timeline',
  points: '.time-line__brake-point',
}

class Slider {
  constructor() {
    this.slides = document.querySelectorAll(settings.slides)
    this.placeForRender = document.querySelector(settings.place)
    this.control = document.querySelector(settings.control)
    this.points = ''
    this.point = 1
    this._pointsRender()
    this._getPoints(settings.points)
  }

  _pointsRender() {
    this.placeForRender.insertAdjacentHTML("afterbegin", this._setPoints())
  }

  _setPoints() {
    let timeLinePoints = ''
    this.slides.forEach(el => {
      let start = (this.point === 1) ? 'time-line__brake-point-active' : ''
      timeLinePoints += `<div class="time-line__brake-point time-line__brake-point-${this.point} ${start}">${this.point}</div>`
      this.point++
    })
    this.point = 1
    return timeLinePoints
  }

  _getPoints(points) {
    return this.points = document.querySelectorAll(points)
  }

  _getPoint(target) {
    if (target !== '')
      for (let i = 1; i <= this.points.length; i++) {
        const nameClass = 'time-line__brake-point-' + i
        if (target.classList.contains(nameClass)) {
          this.point = i
        }
      } else {
      this.point++
    }
    if (this.point > this.slides.length) this.point = 1
    return this.point
  }

  _addActivePoint(point) {
    this._removeActivePoint()
    const nameClass = 'time-line__brake-point-' + point
    this.points.forEach((el) => {
      if (el.classList.contains(nameClass)) {
        el.classList.add('time-line__brake-point-active')
      }
    })
  }

  _removeActivePoint() {
    this.points.forEach(el => {
      if (el.classList.contains('time-line__brake-point-active')) {
        el.classList.remove('time-line__brake-point-active')
      }
    })
  }

  goToSlide(target = '') {
    const number = this._getPoint(target)
    const targetSlide = 'time-line__item-' + number
    this._addActivePoint(this.point)
    for (let slide of this.slides) {
      if (slide.classList.contains(targetSlide)) {
        slide.classList.add('time-line__item-active')
      } else {
        slide.classList.remove('time-line__item-active')
      }
    }
  }
}

const slider = new Slider()
setInterval(() => slider.goToSlide(), 10000)
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-line__brake-point')) {
    slider.goToSlide(event.target)
  }
})
