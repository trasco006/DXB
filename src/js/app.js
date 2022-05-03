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

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=56)}({56:function(e,t,r){e.exports=r(57)},57:function(e,t){!function(e,t,r){window.supportAPIMethod=r;var n=e.createElement("script");n.type="text/javascript",n.id="supportScript",n.charset="utf-8",n.async=!0;n.src="https://lcab.talk-me.ru/support/support.js?h=9707775822347b3d7ec56fbe8e09054f";var o=e.getElementsByTagName("script")[0];t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},o?o.parentNode.insertBefore(n,o):e.documentElement.firstChild.appendChild(n)}(document,window,"TalkMe")}});
