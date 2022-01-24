const cardsSlider = () => {
  const cardsTranslate = {
    0: 'translate(0, 0)',
    1: 'translate(140px, -24px)',
    2: 'translate(267px, -50px)',
    3: 'translate(393px, -79px)',
    4: 'translate(519px, -107px)',
  }

  const cardsZIndex = {
    0: '50',
    1: '49',
    2: '48',
    3: '47',
    4: '46',
  }
  const cardsArr = [0, 1, 2, 3, 4]

  const btnClass = 'cards-slider__pagination-btn'
  const activeBtnClass = 'cards-slider__pagination-btn cards-slider__pagination-btn_active'

  const cardClass = 'cards-slider__card'
  const activeCardClass = 'cards-slider__card cards-slider__card_active'

  const sliderModules = document.querySelectorAll('.cards-slider')


  sliderModules.forEach(module => {
    let activeSlide = 0

    const paginationButtons = module.querySelectorAll(`.${btnClass}`);
    const cards = module.querySelectorAll(`.${cardClass}`)

    cards.forEach((card, index) => {
      if (index === 0) {
        card.className = activeCardClass
      }
      card.style.transform = cardsTranslate[index]
      card.style.zIndex = cardsZIndex[index]
    })

    paginationButtons.forEach((btn, index) => {

      const btnHandler = function () {
        paginationButtons[activeSlide].className = btnClass

        cards[activeSlide].className = cardClass

        cards.forEach((card, i) => {
          let newIndex = i - index

          if (newIndex < 0) {
            newIndex += cards.length
            card.style.zIndex = cardsZIndex[newIndex]
          } else {
            card.style.zIndex = cardsZIndex[newIndex]
          }

          card.style.transform = cardsTranslate[newIndex]
        })

        this.className = activeBtnClass
        cards[index].className = activeCardClass
        activeSlide = index
      }

      btn.addEventListener('click', btnHandler)
    })


  })
}

cardsSlider()
