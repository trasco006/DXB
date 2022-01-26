class SlideStories {
  constructor(slide, prev, next) {
    this.prevCategory = prev
    this.nextCategory = next
    this.slide = slide
    this.active = 0;
    this.items = slide.querySelectorAll('.cards-slider__card-image');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems()
    this.init()
    this.addNavigation();


    this.touchTimer = null;
    this.touchduration = 100;
  }

  Timer(callback, delay) {
    let timerId, start, remaining = delay;
    this.remove = function () {
      window.clearTimeout(timerId);
    }

    this.pause = function () {
      window.clearTimeout(timerId);
      timerId = null;
      remaining -= Date.now() - start;
    };

    this.resume = function () {
      if (timerId) {
        return;
      }

      start = Date.now();
      timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
  }

  autoPlay() {
    this.timer && this.timer.remove()
    this.timer = new this.Timer(this.next, 5000);
  }

  start() {
    this.activeSlide(0, true)
  }

  stop() {
    this.timer.remove();
    this.activeSlide(0)
  }

  pause() {
    this.timer.pause()
    console.log('pause')
    this.thumbItems[this.active].querySelector('span').style.animationPlayState = 'paused'
  }

  resume() {
    this.timer.resume()
    console.log('resume')
    this.thumbItems[this.active].querySelector('span').style.animationPlayState = 'running'
  }

  activeSlide(index, play) {
    play && this.autoPlay()

    this.active = index;
    this.items.forEach((item) => item.classList.remove('cards-slider__card-image_active'));
    this.items[index].classList.add('cards-slider__card-image_active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active'); //вместо этого вручную будем менять заполненеие
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1, true);
    } else {
      this.stop()
      this.prevCategory()
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1, true);
    } else {
      this.nextCategory()
      this.stop()
    }
  }

  select(id) {
    this.activeSlide(id, true);
  }

  touchstart() {
    this.touchTimer = setTimeout(this.pause, this.touchduration);
  }

  touchend() {
    if (this.touchTimer) {
      this.resume()
      clearTimeout(this.touchTimer);
    }
  }


  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const pauseBtn = this.slide.querySelector('.slide-pause');
    const prevBtn = this.slide.querySelector('.slide-prev');

    nextBtn.addEventListener('click', this.next);
    this.slide.addEventListener('touchstart', this.touchstart);
    this.slide.addEventListener('touchend', this.touchend);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<div><span></span></div>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  init(param) {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.pause = this.pause.bind(this)
    this.resume = this.resume.bind(this)
    this.touchend = this.touchend.bind(this)
    this.touchstart = this.touchstart.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.activeSlide(0, param);
  }
}

const
  cardsSlider = () => {

    const btnClass = 'cards-slider__pagination-btn'
    const activeBtnClass = 'cards-slider__pagination-btn cards-slider__pagination-btn_active'

    const cardClass = 'cards-slider__card'
    const activeCardClass = 'cards-slider__card cards-slider__card_active'

    const sliderModules = document.querySelectorAll('.cards-slider')

    sliderModules.forEach(module => {
      let activeSlide = 0

      const paginationButtons = module.querySelectorAll(`.${btnClass}`);
      const cards = module.querySelectorAll(`.${cardClass}`)

      paginationButtons.forEach((btn, index) => {
        const openCard = (openCardIndex) => {
          cards[openCardIndex].story.start()
          paginationButtons[openCardIndex].className = activeBtnClass
          cards[openCardIndex].className = activeCardClass
        }
        const closeCard = (closeCardIndex) => {
          cards[closeCardIndex].story.stop()
          cards[closeCardIndex].className = cardClass
          paginationButtons[closeCardIndex].className = btnClass
        }
        const prevCategory = () => {
          const prevIndex = index === 0 ? paginationButtons.length - 1 : index - 1
          closeCard(index)
          activeSlide = prevIndex
          openCard(prevIndex)
        }
        const nextCategory = () => {
          const nextIndex = index === paginationButtons.length - 1 ? 0 : index + 1
          closeCard(index)
          activeSlide = nextIndex
          openCard(nextIndex)
        }
        cards[index].story = new SlideStories(cards[index], prevCategory, nextCategory)

        // slides in category
        const slidesArr = cards[index].querySelectorAll('.cards-slider__card-image')
        //
        // let timer = 0
        // const handleCardDown = function (target, slideIndex) {
        //   timer = setTimeout(() => {
        //     cards[index].story.pause()
        //     console.log('pause')
        //     clearTimeout(timer);
        //     timer = null
        //   }, 500);
        // }
        //
        // const handleCardUp = function (target, slideIndex) {
        //   if (timer) {
        //     cards[index].story.resume()
        //     console.log('resume')
        //     cards[index].story.select(slideIndex)
        //     clearTimeout(timer);
        //   }
        // }


        slidesArr.forEach((slide, slideIndex) => {
          let pause = false

          const simpleClick = function () {
            if (window.outerWidth > 720) {
              if (this.classList.contains('cards-slider__card-image_active')) {
                if (pause) {
                  cards[index].story.resume()
                  pause = false
                  console.log('resume')
                } else {
                  cards[index].story.pause()
                  pause = true
                  console.log('pause')
                }
              } else {
                console.log('select new slide');
                cards[index].story.select(slideIndex)
              }
            }
          }

          slide.addEventListener('click', simpleClick)
          // slide.addEventListener('mousedown', function ({target}) {
          //   handleCardDown(target, slideIndex)
          // })
          // slide.addEventListener('mouseup', function ({target}) {
          //   handleCardUp(target, slideIndex)
          // })
        })

        const btnHandler = function () {
          paginationButtons[activeSlide].className = btnClass
          cards[activeSlide].className = cardClass
          closeCard(activeSlide)

          openCard(index)
          this.className = activeBtnClass
          cards[index].className = activeCardClass
          activeSlide = index
        }


        btn.addEventListener('click', btnHandler)
      })

      cards[0].story.start()
    })
  }

cardsSlider()
