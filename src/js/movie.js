const movieLink = () => localStorage.getItem('locale') === 'ru' ? 'https://www.youtube.com/embed/C6UNDBeDb74' : 'https://www.youtube.com/embed/3VJ_vVZllt8'

const registrationPopup = (() => {
  const moviePopup = document.querySelector('.video-popup')
  const movieIframe = document.querySelector('.main_movie')

  const body = document.querySelector("body")
  const overlay = moviePopup.querySelector('.popup__overlay')

  const gameBtn = document.querySelector('.game__video-btn')
  const howWorksBtn = document.querySelector('.how-works__video-btn')
  const gameMainBtn = document.querySelector('.game__main-btn')

  const handleOpenVideoPopup = () => {
    moviePopup.classList.add('popup_active')
    body.classList.add('o-hidden')
    movieIframe.src = movieLink()+'?&autoplay=1&controls=1'
  }

  const handleCloseVideoPopup = () => {
    moviePopup.classList.remove('popup_active')
    body.classList.remove('o-hidden')
    movieIframe.src = ""
  }

  overlay.addEventListener('click', handleCloseVideoPopup)

  gameBtn.addEventListener('click', handleOpenVideoPopup)
  gameMainBtn.addEventListener('click', handleOpenVideoPopup)
  howWorksBtn.addEventListener('click', handleOpenVideoPopup)
})()

