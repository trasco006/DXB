   import {CookieModule} from "../cookie";
import DictionaryModule from "./dictionaryModule";
import nodeUtils from "../nodeUtils";
import {videoAutoplay} from "../video";

class TranslateModule {
  constructor(dictionary) {
    this.locales = ['ru', 'en']
    this.container = document.querySelector('.main')

    this.languageSelect = this.container.querySelector('.language-select')
    this.selectedLang = this.languageSelect.querySelector('.language-select__selected-lang')
    this.languageSelectElements = this.languageSelect.querySelectorAll('[data-lang]')

    this.textFields = this.container.querySelectorAll('[data-t-key]')
    this.popups = this.container.querySelectorAll('[data-t-popup-key]')
    this.placeholders = this.container.querySelectorAll('[data-t-placeholder-key]')
    this.images = this.container.querySelectorAll('[data-t-img]')
    this.sources = this.container.querySelectorAll('[data-t-source]')

    this.videos = this.container.querySelectorAll('[data-t-video]')
    this.videoSources = this.container.querySelectorAll('[data-t-video-source]')

    this.btnDecorEn = this.container.querySelector('.game__btn-decor_en')
    this.btnDecorRu = this.container.querySelector('.game__btn-decor_ru')

    this.cardCtaBtnEn = this.container.querySelector(".how-works__card-cta_en");
    this.cardCtaBtnRu = this.container.querySelector(".how-works__card-cta_ru");

    this.gameCtaEnList = this.container.querySelectorAll(".game_main-cta-decor_en");
    this.gameCtaRuList = this.container.querySelectorAll(".game_main-cta-decor_ru");

    this.baseLocale = this.getLocale() || navigator.language.split('-')[0]
    this.locale = this.locales.indexOf(this.baseLocale) > -1 ? this.baseLocale : 'ru'

    this.dictionaryModule = dictionary

    this.reputationBlock = document.querySelector('.reputation')
    this.reputationMenuItem = document.querySelector('#reputation-menu')
  }

  getLocale() {
    return localStorage.getItem('locale')
  }

  setLocale(lang) {
    localStorage.setItem('locale', lang)
    CookieModule.set('locale', lang, 1825)
  }

  async init() {
    this.setLocale(this.locale)
    this.setLanguageSelect()
    await this.handleTranslate()
    this.setInitSelectedLang()
  }

  hideWithLocale(node) {
    if (this.getLocale() === 'en') {
      nodeUtils.hideNode(node)
    } else {
      nodeUtils.showNode(node)
    }
  }

  async handleTranslate() {
    window.TalkMeSetup = {
      language: this.getLocale()
    };
    const dictionary = await this.dictionaryModule.getDictionary(this.getLocale())
    this.translateImages()
    this.translateVideo()
    this.hideWithLocale(this.reputationBlock)
    this.hideWithLocale(this.reputationMenuItem)

    if (this.getLocale() === 'en') {
      this.btnDecorEn.classList.remove('hidden')
      this.btnDecorRu.classList.add('hidden')
      this.cardCtaBtnEn.classList.remove('hidden')
      this.cardCtaBtnRu.classList.add('hidden')
      this.gameCtaRuList.forEach(item => item.classList.add('hidden'))
      this.gameCtaEnList.forEach(item => item.classList.remove('hidden'))

    } else {
      this.btnDecorEn.classList.add('hidden')
      this.btnDecorRu.classList.remove('hidden')
      this.cardCtaBtnEn.classList.add('hidden')
      this.cardCtaBtnRu.classList.remove('hidden')
      this.gameCtaRuList.forEach(item => item.classList.remove('hidden'))
      this.gameCtaEnList.forEach(item => item.classList.add('hidden'))
    }
    return await Promise.all([
      this.translateFields(dictionary),
      this.translateHolders(dictionary),
      this.translatePopups(dictionary)])
  }

  setInitSelectedLang() {
    const selected = this.languageSelect.querySelector(`[data-lang-${this.getLocale()}]`)
    this.handleSetSelectedLang(selected)
  }

  handleSetSelectedLang(newSelected) {
    this.selectedLangElement?.classList.remove('hidden')
    this.selectedLangElement = newSelected
    this.selectedLangElement.classList.add('hidden')
    this.selectedLang.innerHTML = newSelected.innerHTML
  }

  setLanguageSelect() {
    this.languageSelect.addEventListener('click', () => {
      this.languageSelect.classList.toggle('open');
    }, true)

    this.languageSelectElements.forEach(item => {
      item.addEventListener('click', () => {
        this.handleSetSelectedLang(item)
        const locale = item.getAttribute('data-lang')
        this.setLocale(locale)
        this.handleTranslate()
      })
    })

    document.addEventListener('click', (evt) => {
      if (!evt.target.closest('.language-select')) {
        this.languageSelect.classList.remove('open');
      }
    })

    if (window.innerWidth < 580) {
      document.querySelector('.menu__container').appendChild(this.languageSelect)
    } else {
      document.querySelector('.nav-menu__list').appendChild(this.languageSelect)
    }

    window.addEventListener('resize', () => {
      const isClosest = !!this.languageSelect.closest('.menu__container')
      if (window.innerWidth < 580) {
        !isClosest && document.querySelector('.menu__container').appendChild(this.languageSelect)
      } else {
        isClosest && document.querySelector('.nav-menu__list').appendChild(this.languageSelect)
      }
    })
  }

  async translateFields(dictionary) {
    const setFields = (dictionary) => {
      this.textFields.forEach(item => {
        const key = item.getAttribute('data-t-key')

        if (dictionary?.[key]) {
          item.textContent = dictionary[key]
        }
      });
    }
    return setFields(dictionary)
  }

  async translateHolders(dictionary) {
    const setHolders = (dictionary) => {
      this.placeholders.forEach(item => {
        const key = item.getAttribute('data-t-placeholder-key')
        if (dictionary?.[key]) {
          item.placeholder = dictionary[key]
        }
      });
    }
    return setHolders(dictionary)
  }

  async translatePopups(dictionary) {
    const setPopups = (dictionary) => {
      this.popups.forEach(item => {
        const key = item.getAttribute('data-t-popup-key')
        if (dictionary?.[key]) {
          item.innerHTML = dictionary[key]
        }
      });
    }
    return setPopups(dictionary)
  }

  translateImages() {
    const getLocaleFolder = (str) => {
      return str.indexOf('/content/')
    }
    const changeImageUrlLocal = (src) => {
      const currentImageLocale = src.substring(getLocaleFolder(src) + 8, getLocaleFolder(src) + 8 + 4)
      return src.replace(currentImageLocale, `/${this.getLocale()}/`)
    }
    this.sources.forEach((src) => {
      const newSrc = changeImageUrlLocal(src.srcset)
      if (newSrc) {
        src.srcset = newSrc
      }
    })
    this.images.forEach((img) => {
      const newSrc = changeImageUrlLocal(img.src)
      if (newSrc) {
        img.src = newSrc
      }
    })
  }

  translateVideo() {
    const getLocaleFolder = (str) => {
      return str.indexOf('/content/')
    }
    const changeImageUrlLocal = (src) => {
      const currentImageLocale = src.substring(getLocaleFolder(src) + 8, getLocaleFolder(src) + 8 + 4)
      return src.replace(currentImageLocale, `/${this.getLocale()}/`)
    }
    this.videoSources.forEach((src) => {
      const newSrc = changeImageUrlLocal(src.src)
      if (newSrc) {
        src.src = newSrc
      }
    })
    this.videos.forEach((video) => {
      const newSrc = changeImageUrlLocal(video.src)
      if (newSrc) {
        video.src = newSrc
      }
    })
  }
}

const dictionary = new DictionaryModule()
const translation = new TranslateModule(dictionary)

document.addEventListener("DOMContentLoaded", () => {
  translation.init()
  const params = (new URL(document.location)).searchParams;
  const ref = params.get('ref');

  if (ref) {
    CookieModule.set('referral', ref, 1852)
  }
  setTimeout(videoAutoplay, 1000)
});
