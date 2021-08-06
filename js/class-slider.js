'use strict'
const settings = {
  slides: '.time-line__item',
  place: '.time-line__brake-points',
  control: '.controle-timeline',
  pointsClass: '.time-line__brake-point',
  carousel: '.time-line__items',
  autoPlay: true,
  interval: 7000,
  handSwitch: true
}

class Slider {
  constructor() {
    this.slides = document.querySelectorAll(settings.slides)
    this.placeForRender = document.querySelector(settings.place)
    this.control = document.querySelector(settings.control)
    this.carousel = document.querySelector(settings.carousel)
    this.points = ''
    this.point = 1
    this.interval = 5000
    this.pointClass = settings.pointsClass.split('.')[1]
    this.itemClass = settings.slides.split('.')[1]
    this._init(this.pointClass)
  }

  _init(pointClass) {

    this._pointsRender(pointClass)
    this._getPoints(settings.pointsClass)
    if (settings.autoPlay) {
      this.interval = settings.interval
      this._autoPlay()
    }
    settings.handSwitch ? this._handSwitch(pointClass) : null
  }

  _pointsRender(pointClass) {
    this.placeForRender.insertAdjacentHTML("afterbegin", this._setPoints(pointClass))
  }

  _setPoints(pointClass) {
    let points = ''
    this.slides.forEach(el => {
      let start = (this.point === 1) ? `${pointClass}-active` : ''
      points += `<div class="${pointClass} ${pointClass}-${this.point} ${start}">${this.point}</div>`
      this.point++
    })
    this.point = 1
    return points
  }

  _getPoints(pointsClass) {
    return this.points = document.querySelectorAll(pointsClass)
  }

  _getPoint(target) {
    if (target !== '')
      for (let i = 1; i <= this.points.length; i++) {
        const nameClass = `${this.pointClass}-${i}`
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
    const nameClass = `${this.pointClass}-${point}`
    this.points.forEach((el) => {
      if (el.classList.contains(nameClass)) {
        el.classList.add(`${this.pointClass}-active`)
      }
    })
  }

  _removeActivePoint() {
    this.points.forEach(el => {
      if (el.classList.contains(`${this.pointClass}-active`)) {
        el.classList.remove(`${this.pointClass}-active`)
      }
    })
  }

  goToSlide(target = '') {
    const number = this._getPoint(target)
    const targetSlide = `${this.itemClass}-${number}`
    this._addActivePoint(this.point)
    for (let slide of this.slides) {
      if (slide.classList.contains(targetSlide)) {
        slide.classList.add(`${this.itemClass}-active`)
      } else {
        slide.classList.remove(`${this.itemClass}-active`)
      }
    }
  }

  _autoPlay(interval = this.interval, carousel = this.carousel) {
    let intervalID = setInterval(() => this.goToSlide(), interval)
    const autoPlay = () => intervalID = setInterval(() => slider.goToSlide(), interval)
    carousel.addEventListener('mouseover', () => clearInterval(intervalID))
    carousel.addEventListener('mouseleave', () => autoPlay())
  }

  _handSwitch(pointClass) {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains(pointClass)) {
        this.goToSlide(event.target)
      }
    })
  }
}

const slider = new Slider()
