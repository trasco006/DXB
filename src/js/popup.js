const registrationBtn = document.querySelector('.hero__registration')
const registrationPopupEl = document.querySelector('.registration-popup')
const body = document.querySelector("body")

const registrationPopup = () => {
  const overlay = registrationPopupEl.querySelector('.popup__overlay')
  const registrationForm = registrationPopupEl.querySelector('.registration__form')

  const handleOpenRegistrationPopup = () => {
    registrationPopupEl.classList.add('popup_active')
    body.className = 'o-hidden'
  }

  const handleCloseRegistrationPopup = () => {
    registrationPopupEl.classList.remove('popup_active')
    registrationForm.reset();
    body.className = ''
  }

  registrationBtn.addEventListener('click', handleOpenRegistrationPopup)
  overlay.addEventListener('click', handleCloseRegistrationPopup)
}

registrationPopup()
