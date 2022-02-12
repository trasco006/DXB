const registrationPopup = (() => {
  const movieLink = 'https://www.youtube.com/embed/ITBMT-sUeH0?&autoplay=1&controls=1'
  const moviePopup = document.querySelector('.video-popup')
  const movieIframe = document.querySelector('.main_movie')
  const body = document.querySelector("body")
  const gameBtn = document.querySelector('.game__btn-image')
  const overlay = moviePopup.querySelector('.popup__overlay')

  const handleOpenVideoPopup = () => {
    moviePopup.classList.add('popup_active')
    body.className = 'o-hidden'
    movieIframe.src = movieLink
  }

  const handleCloseVideoPopup = () => {
    moviePopup.classList.remove('popup_active')
    body.className = ''
    movieIframe.src = ""
  }

  gameBtn.addEventListener('click', handleOpenVideoPopup)
  overlay.addEventListener('click', handleCloseVideoPopup)
})()
