const reputation = () => {
  const btnClass = 'reputation__pagination-btn'
  const activeBtnClass = 'reputation__pagination-btn reputation__pagination-btn_active'
  const body = document.querySelector("body")
  const cardClass = 'reputation__card'
  const activeCardClass = 'reputation__card reputation__card_active'

  const reputationModules = document.querySelectorAll('.reputation')
  const commentPopups = document.querySelectorAll('.comment-popup')


  commentPopups.forEach(popup => {
    const overlay = popup.querySelector('.popup__overlay')
    const registrationForm = popup.querySelector('.registration__form')

    const handleClosePopup = () => {
      popup.classList.remove('popup_active')
      body.className = ''
    }

    overlay.addEventListener('click', handleClosePopup)
  })


  reputationModules.forEach(module => {
    let activeSlide = 0

    const paginationButtons = module.querySelectorAll(`.${btnClass}`);
    const cards = module.querySelectorAll(`.${cardClass}`)

    const commentHandleClick = function () {
      if (window.outerWidth < 741) {
        const commentId = this.dataset.comment
        let selectedPopup = 0;
        commentPopups.forEach(item => {
          if (item.dataset.comment === commentId) {
            selectedPopup = item
          }
        })
        selectedPopup.classList.add('popup_active')
        body.className = 'o-hidden'
      }
    }
    cards.forEach(item => {
      item.addEventListener('click', commentHandleClick)
    })

    paginationButtons.forEach((btn, index) => {
      const openCard = (openCardIndex) => {
        paginationButtons[openCardIndex].className = activeBtnClass
        cards[openCardIndex].className = activeCardClass
      }
      const closeCard = (closeCardIndex) => {
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
  })
}

reputation()
