// class SlideStories {
//   constructor(slide) {
//     this.slide = slide
//     this.active = 0;
//   }
//
//   activeSlide(index) {
//     this.active = index;
//     this.items.forEach((item) => item.classList.remove('active'));
//     this.items[index].classList.add('active');
//     this.thumbItems.forEach((item) => item.classList.remove('active'));
//     this.thumbItems[index].classList.add('active');
//     this.autoSlide();
//   }
//
//   prev() {
//     if (this.active > 0) {
//       this.activeSlide(this.active - 1);
//     } else {
//       this.activeSlide(this.items.length - 1);
//     }
//   }
//
//   next() {
//     if (this.active < this.items.length - 1) {
//       this.activeSlide(this.active + 1);
//     } else {
//       this.activeSlide(0);
//     }
//   }
//
//   addNavigation() {
//     const nextBtn = this.slide.querySelector('.slide-next');
//     const prevBtn = this.slide.querySelector('.slide-prev');
//     nextBtn.addEventListener('click', this.next);
//     prevBtn.addEventListener('click', this.prev);
//   }
//
//   addThumbItems() {
//     this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
//     this.thumbItems = Array.from(this.thumb.children);
//   }
//
//   autoSlide() {
//     clearTimeout(this.timeout);
//     this.timeout = setTimeout(this.next, 3000);
//   }
//
//   stop() {
//     clearTimeout(this.timeout);
//   }
//
//   start() {
//     this.timeout = setTimeout(this.next, 3000);
//   }
//
//   clear() {
//     this.stop()
//     this.active = 0
//   }
//
//   init() {
//     this.next = this.next.bind(this);
//     this.prev = this.prev.bind(this);
//     this.items = this.slide.querySelectorAll('.slide-items > *');
//     this.thumb = this.slide.querySelector('.slide-thumb');
//     this.addThumbItems();
//     this.activeSlide(0);
//     this.addNavigation();
//   }
// }

const cardsSlider = () => {

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

      const btnHandler = function () {
        paginationButtons[activeSlide].className = btnClass
        cards[activeSlide].className = cardClass

        this.className = activeBtnClass
        cards[index].className = activeCardClass
        activeSlide = index
      }

      btn.addEventListener('click', btnHandler)
    })
  })
}

cardsSlider()
