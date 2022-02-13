const registrationPopup = (() => {
  const movieLink = 'https://www.youtube.com/embed/ITBMT-sUeH0?&autoplay=1&controls=1'
  const moviePopup = document.querySelector('.video-popup')
  const movieIframe = document.querySelector('.main_movie')

  const body = document.querySelector("body")
  const overlay = moviePopup.querySelector('.popup__overlay')

  const gameBtn = document.querySelector('.game__video-btn')
  const howWorksBtn = document.querySelector('.how-works__video-btn')
  const gameMainBtn = document.querySelector('.game__main-btn')

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

  overlay.addEventListener('click', handleCloseVideoPopup)

  gameBtn.addEventListener('click', handleOpenVideoPopup)
  gameMainBtn.addEventListener('click', handleOpenVideoPopup)
  howWorksBtn.addEventListener('click', handleOpenVideoPopup)
})()

