import {Loader} from "../loader";
import {CookieModule} from "../cookie";

class DictionaryModule {
  dictionaries = {}

  stringify(value) {
    return JSON.stringify(value);
  }

  parse(value) {
    return JSON.parse(value);
  }

  getDictionaryFromLS(lang) {
    const dictionary = localStorage.getItem(`dictionary-${lang}`)
    try {
      return this.parse(dictionary)
    } catch (e) {
      return null
    }
  }

  setDictionaryToLS(lang, data) {
    localStorage.setItem(`dictionary-${lang}`, data)
  }

  setDictionary(lang, dictionary) {
    this.dictionaries[lang] = dictionary
  }

  async fetchDictionary(lang) {
    const res = await (await fetch(`assets/locales/${lang}.json`)).json()
    const stringDictionary = this.stringify(res)
    this.setDictionaryToLS(lang, stringDictionary)
    this.setDictionary(lang, res)
    return this.dictionaries[lang]
  }

  getDictionary(lang) {
    if (this.dictionaries[lang]) {
      return this.dictionaries[lang]
    }
    const dictionary = this.getDictionaryFromLS(lang)

    if (dictionary) {
      this.setDictionary(lang, dictionary)
      return dictionary
    }

    return this.fetchDictionary(lang)
  }
}

class TranslateModule {
  constructor(dictionary) {
    this.container = document.querySelector('.main')

    this.languageSelect = this.container.querySelector('.language-select')
    this.selectedLang = this.languageSelect.querySelector('.language-select__selected-lang')
    this.languageSelectElements = this.languageSelect.querySelectorAll('[data-lang]')

    this.textFields = this.container.querySelectorAll('[data-t-key]')
    this.popups = this.container.querySelectorAll('[data-t-popup-key]')
    this.placeholders = this.container.querySelectorAll('[data-t-placeholder-key]')
    this.images = this.container.querySelectorAll('[data-t-img]')
    this.sources = this.container.querySelectorAll('[data-t-source]')

    this.baseLocale = this.getLocale() || navigator.language.split('-')[0]
    this.locale = this.baseLocale

    this.dictionaryModule = dictionary
  }

  getLocale() {
    return localStorage.getItem('locale')
  }

  setLocale(lang) {
    localStorage.setItem('locale', lang)
  }

  async init() {
    this.setLocale(this.locale)
    this.setLanguageSelect()
    await this.handleTranslate()
    new Loader().hideLoader()
    this.setInitSelectedLang()
  }

  async handleTranslate() {
    const dictionary = await this.dictionaryModule.getDictionary(this.getLocale())
    this.translateImages()

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
});
