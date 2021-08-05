'use strict'
const Slider = {
  timeLineSlides: document.querySelectorAll('.time-line__item'),
  placeForRender: document.querySelector('.time-line__brake-points'),
  timeLineControl: document.querySelector('.controle-timeline'),
  point: 1,
  points: null,
  _pointsRender() {
    this.placeForRender.insertAdjacentHTML("afterbegin", this._setPoints())
    this._getPoints()
  },
  _getPoints() {
    return this.points = document.querySelectorAll('.time-line__brake-point')
  },
  _setPoints() {
    let timeLinePoints = ''
    this.timeLineSlides.forEach(el => {
      let start = (this.point === 1) ? 'time-line__brake-point-active' : ''
      timeLinePoints += `<div class="time-line__brake-point time-line__brake-point-${this.point} ${start}">${this.point}</div>`
      this.point++
    })
    this.point = 1
    return timeLinePoints
  },
  _goToSlide(target = '') {
    const a = this._getPoint(target)
    const targetSlide = 'time-line__item-' + a
    this._removeActivePoint()
    this._addActivePoint(this.point)
    for (let slide of this.timeLineSlides) {
      if (slide.classList.contains(targetSlide)) {
        slide.classList.add('time-line__item-active')
      } else {
        slide.classList.remove('time-line__item-active')
      }
    }
  },
  _getPoint(target = ``) {
    if (target !== '')
      for (let i = 1; i <= this.points.length; i++) {
        const nameClass = 'time-line__brake-point-' + i
        if (target.classList.contains(nameClass)) {
          this.point = i
        }
      } else {
      this.point++
    }
    if (this.point > this.timeLineSlides.length) this.point = 1
    return this.point
  },
  _removeActivePoint() {
    this.points.forEach(el => {
      if (el.classList.contains('time-line__brake-point-active')) {
        el.classList.remove('time-line__brake-point-active')
      }
    })
  },
  _addActivePoint(point) {
    const nameClass = 'time-line__brake-point-' + this.point
    this.points.forEach((el) => {
      if (el.classList.contains(nameClass)) {
        el.classList.add('time-line__brake-point-active')
      }
    })
  }
}
Slider._pointsRender()
setInterval(Slider._goToSlide, 2000)
