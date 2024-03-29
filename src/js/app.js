import '../scss/app.scss';

import './t/index.js'
import './loader/index.js'
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

function initPrivacyPopupLogic() {
  const privacyBtn = document.querySelector('#privacy-btn')
  const privacyPopup = document.querySelector('#popup-privacy-policy')
  const privacyPopupBtn = privacyPopup.querySelector('button')
  const privacyOverlay = privacyPopup.querySelector('.popup__overlay')

  privacyBtn?.addEventListener('click', function () {
    privacyPopup.classList.toggle('popup_active')
    body.classList.toggle('o-hidden')
  })

  privacyPopupBtn.addEventListener('click', () => {
    privacyPopup.classList.remove('popup_active')
    privacyPopupBtn.querySelector('div').scrollBy(0, 0)
    body.classList.remove('o-hidden')
  })

  privacyOverlay.addEventListener('click', () => {
    privacyPopup.classList.remove('popup_active')
    privacyPopup.querySelector('div').scrollBy(0, 0)
    body.classList.remove('o-hidden')
  })
}

function initContractPopupLogic() {
  const contractBtn = document.querySelector('#contract-btn')
  const contractPopup = document.querySelector('#popup-contract')
  const contractPopupBtn = contractPopup.querySelector('button')
  const contractOverlay = contractPopup.querySelector('.popup__overlay')

  contractBtn?.addEventListener('click', function () {
    contractPopup.classList.toggle('popup_active')
    body.classList.toggle('o-hidden')
  })

  contractPopupBtn.addEventListener('click', () => {
    contractPopup.classList.remove('popup_active')
    contractPopup.querySelector('div').scrollBy(0, 0)
    body.classList.remove('o-hidden')
  })

  contractOverlay.addEventListener('click', () => {
    contractPopup.classList.remove('popup_active')
    contractPopup.querySelector('div').scrollBy(0, 0)
    body.classList.remove('o-hidden')
  })
}
function initCostPopupsLogic() {
  const popupSelectors = {
    fortune: '#fortune-popup',
    shop: '#shop-popup',
    'full-work': '#full-work-popup',
    'full-support': '#full-support-popup'
  };

  const costAdditionalButtons = document.querySelectorAll('.cost__additional-button');

  costAdditionalButtons.forEach((button) => {
    try {
      const popup = document.querySelector(popupSelectors[button.dataset.costAdditionalType]);
      const popupBtn = popup.querySelector('button')
      const overlay = popup.querySelector('.popup__overlay')

      button?.addEventListener('click', function () {
        popup.classList.toggle('popup_active')
        body.classList.toggle('o-hidden')
      })

      popupBtn.addEventListener('click', () => {
        popup.classList.remove('popup_active')
        popup.querySelector('div').scrollBy(0, 0)
        body.classList.remove('o-hidden')
      })

      overlay.addEventListener('click', () => {
        popup.classList.remove('popup_active')
        popup.querySelector('div').scrollBy(0, 0)
        body.classList.remove('o-hidden')
      })
    } catch (e) { console.log(e) }
  })
}

function initSolutionsPopupsLogic() {
  const popupSelectors = {
    fortune: '#fortune-popup',
    shop: '#shop-popup',
  };

  const costAdditionalButtons = [document.querySelector('#shop-trigger'), document.querySelector('#fortune-trigger')]

  costAdditionalButtons.forEach((button) => {
    try {
      const popup = document.querySelector(popupSelectors[button.dataset.popupType]);
      const popupBtn = popup.querySelector('button')
      const overlay = popup.querySelector('.popup__overlay')

      button?.addEventListener('click', function () {
        popup.classList.toggle('popup_active')
        body.classList.toggle('o-hidden')
      })

      popupBtn.addEventListener('click', () => {
        popup.classList.remove('popup_active')
        popup.querySelector('div').scrollBy(0, 0)
        body.classList.remove('o-hidden')
      })

      overlay.addEventListener('click', () => {
        popup.classList.remove('popup_active')
        popup.querySelector('div').scrollBy(0, 0)
        body.classList.remove('o-hidden')
      })
    } catch (e) { console.log(e) }
  })
}

initPrivacyPopupLogic();
initContractPopupLogic();
initCostPopupsLogic();
initSolutionsPopupsLogic();