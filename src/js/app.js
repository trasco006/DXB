import '../scss/app.scss';

import './t/index.js'
import './main.js';
import './cost.js'
import './registration.js'
import './popup.js'
import './benefits.js'
import './cards-slider.js'
import './video.js'
import './reputation.js'
import './movie.js'

const body = document.querySelector("body")

const privacyPopup = document.querySelector('#popup-privacy-policy')
const privacyPopupBtn = privacyPopup.querySelector('button')
const contractPopup = document.querySelector('#popup-contract')
const contractPopupBtn = contractPopup.querySelector('button')
const privacyOverlay = privacyPopup.querySelector('.popup__overlay')
const contractOverlay = contractPopup.querySelector('.popup__overlay')

privacyPopupBtn.addEventListener('click', () => {
  privacyPopup.classList.remove('popup_active')
  contractPopup.querySelector('div').scrollBy(0, 0)
  body.classList.remove('o-hidden')
})

contractPopupBtn.addEventListener('click', () => {
  contractPopup.classList.remove('popup_active')
  contractPopup.querySelector('div').scrollBy(0, 0)
  body.classList.remove('o-hidden')
})

privacyOverlay.addEventListener('click', () => {
  privacyPopup.classList.remove('popup_active')
  contractPopup.querySelector('div').scrollBy(0, 0)
  body.classList.remove('o-hidden')
})

contractOverlay.addEventListener('click', () => {
  contractPopup.classList.remove('popup_active')
  contractPopup.querySelector('div').scrollBy(0, 0)
  body.classList.remove('o-hidden')
})

const contractBtn = document.querySelector('#contract-btn')
contractBtn?.addEventListener('click', function () {
  contractPopup.classList.toggle('popup_active')
  body.classList.toggle('o-hidden')
})

const privacyBtn = document.querySelector('#privacy-btn')
privacyBtn?.addEventListener('click', function () {
  privacyPopup.classList.toggle('popup_active')
  body.classList.toggle('o-hidden')
})
