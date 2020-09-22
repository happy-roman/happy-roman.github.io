'use strict'


/**
 * for corect work time-line sleder
 * all break-points must be numereted class like "time-line__breack-point-1"
 * 
 */
const timeLineBbreackPoint = document.querySelectorAll('.time-line__breack-point')


/**
 * for corect show time-line slide
 * all time-line item must be numereted class like "time-line__item-1"
 */
const timeLineSlide = document.querySelectorAll('.time-line__item')


const timeLineControle = document.querySelector('.controle-timeline')
let currentSlide = 1

timeLineControle.addEventListener('click', (event) => {
  const target = event.target
  checkBreackPoint(target)
})

function checkBreackPoint(target) {
  if (target.classList.contains('time-line__breack-point')) {
    goToBreackPoint(target)
  }
}

function goToBreackPoint(target) {
  const targetSlide = 'time-line__item-' + getkBreackPoint(target)
  for (let i = 0; i < timeLineSlide.length; i++) {
    if (timeLineSlide[i].classList.contains(targetSlide)) {
      timeLineSlide[i].classList.add('time-line__item-active')
    } else {
      timeLineSlide[i].classList.remove('time-line__item-active')
    }
  }
}

function getkBreackPoint(target) {
  let point = 0
  for (let i = 0; i < timeLineBbreackPoint.length; i++) {
    let j = i + 1
    const nameClass = 'time-line__breack-point-' + j
    if (target.classList.contains(nameClass)) {
      point = i+1
      target.classList.add('time-line__breack-point-active')
    } else {
      timeLineBbreackPoint[i].classList.remove('time-line__breack-point-active')
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
  for (let i = 0; i < timeLineBbreackPoint.length; i++) {
    const nameClass = 'time-line__breack-point-' + currentSlide
    if (timeLineBbreackPoint[i].classList.contains(nameClass)) {
      timeLineBbreackPoint[i].classList.add('time-line__breack-point-active')
    } else {
      timeLineBbreackPoint[i].classList.remove('time-line__breack-point-active')
    }
  }
  currentSlide++
}

/**
 * if add nav buttons for slider use this func
 *  
 */


function nextBreackPoint() {
  goToPoint()
}

function previousBreackPoint() {
  goToSlide(currentSlide - 1)
}

setInterval(nextBreackPoint, 5000)







// const slides = document.querySelectorAll('#slides .slide')
// const slider = document.querySelector('.slider')
// const sliderBg = document.querySelector('.slider__bg')
// const sliderBgImg = document.querySelector('.slider__bg-img')


// const carouselItems = document.querySelectorAll('.slider_show-item')
// const carousel = document.querySelector('.slider_show')

// function nextSlide() {
//   goToSlide(currentSlide + 1)

// }
// function previousSlide() {
//   goToSlide(currentSlide - 1)
// }

// function changBg(n) {
//   let img = ''
//   //добавляем 1 чтобы можно было нумеровать изображения с 1 (1,2,3...)
//   //выбираем картинку в зависимости от разрешения экрана
//   if (document.body.clientWidth < 500) {
//     img = "./img/slider_bg-mini" + (n + 1) + ".png"
//   } else {
//     img = "./img/slider_bg" + (n + 1) + ".png"
//   }

//   sliderBgImg.setAttribute('src', img)
//   sliderBg.style.opacity = 0.5
//   setTimeout(() => { sliderBg.style.opacity = 1 }, 500)
// }

// function changCarousel(currentSlide) {
//   carousel.style = "transform: translateX(" + (currentSlide * (-400)) + 'px);'
//   for (let key in carouselItems) {
//     if (key > currentSlide + 1 || key < currentSlide) {
//       carouselItems[key].style.opacity = 0
//     } else if (key > currentSlide) {
//       carouselItems[key].style.opacity = '30%'
//     } else if (key == currentSlide) {
//       carouselItems[key].style.opacity = '100%'
//     }
//   }
// }

// function goToSlide(n) {
//   slides[currentSlide].className = 'slide'
//   carouselItems[currentSlide].className = 'slider_show-item'
//   currentSlide = (n + slides.length) % slides.length
//   slides[currentSlide].className = 'slider__text slide showing'
//   carouselItems[currentSlide].className = 'slider_show-item carouse-active'

//   //передаем в функцию номер картинки-1 (0,1,2,3...)
//   changBg(currentSlide)

//   //передаем количество слайдов для сдвига карусели

//   changCarousel(currentSlide)

// }

// const previous = document.getElementById('previous')
// let next = document.getElementById('next')

// next.click = () => {
//   nextSlide()
// }
// previous.click = () => {
//   previousSlide()
// }

// setInterval(nextSlide, 5000)
