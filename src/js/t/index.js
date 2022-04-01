class TranslateModule {
  constructor() {
    this.container = document.querySelector('.main')

    this.languageSelect = this.container.querySelector('.language-select')
    this.selectedLang = this.languageSelect.querySelector('.language-select__selected-lang')
    this.languageSelectElements = this.languageSelect.querySelectorAll('[data-lang]')

    this.textFields = this.container.querySelectorAll('[data-t-key]')
    this.popups = this.container.querySelectorAll('[data-t-popup-key]')
    this.placeholders = this.container.querySelectorAll('[data-t-placeholder-key]')
    this.images = this.container.querySelectorAll('[data-t-img]')
    this.sources = this.container.querySelectorAll('[data-t-source]')

    this.baseLocale = navigator.language.split('-')[0]
    this.locale = this.baseLocale
    this.dictionaries = {}
  }

  init() {
    this.setLanguageSelect()
    this.handleTranslate()
    this.setInitSelectedLang()
  }

  handleTranslate() {
    this.translateFields()
    this.translateHolders()
    this.translatePopups()
    this.translateImages()
  }

  setInitSelectedLang() {
    const selected = this.languageSelect.querySelector(`[data-lang-${this.locale}]`)
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
        this.locale = item.getAttribute('data-lang')
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

  translateFields() {
    const setFields = (dictionary) => {
      this.textFields.forEach(item => {
        const key = item.getAttribute('data-t-key')
        if (dictionary[key]) {
          item.textContent = dictionary[key]
        }
      });
    }

    if (this.dictionaries[this.locale]) {
      setFields(this.dictionaries[this.locale])
    } else {
      fetch(`assets/locales/${this.locale}.json`)
        .then(res => res.json())
        .then(dictionary => {
          setFields(dictionary)
          this.dictionaries[this.locale] = dictionary
        })
    }
  }

  translateHolders() {
    const setHolders = (dictionary) => {
      this.placeholders.forEach(item => {
        const key = item.getAttribute('data-t-placeholder-key')
        if (dictionary[key]) {
          item.placeholder = dictionary[key]
        }
      });
    }

    if (this.dictionaries[this.locale]) {
      setHolders(this.dictionaries[this.locale])
    } else {
      fetch(`assets/locales/${this.locale}.json`)
        .then(res => res.json())
        .then(dictionary => {
          setHolders(dictionary)
          this.dictionaries[this.locale] = dictionary
        })
    }
  }

  translatePopups() {
    const setPopups = (dictionary) => {
      this.popups.forEach(item => {
        const key = item.getAttribute('data-t-popup-key')
        if (dictionary[key]) {
          item.innerHTML = dictionary[key]
        }
      });
    }

    if (this.dictionaries[this.locale]) {
      setPopups(this.dictionaries[this.locale])
    } else {
      fetch(`assets/locales/${this.locale}.json`)
        .then(res => res.json())
        .then(dictionary => {
          setPopups(dictionary)
          this.dictionaries[this.locale] = dictionary
        })
    }
  }

  translateImages() {
    const getLocaleFolder = (str) => {
      return str.indexOf('/content/')
    }
    const changeImageUrlLocal = (src) => {
      const currentImageLocale = src.substring(getLocaleFolder(src) + 8, getLocaleFolder(src) + 8 + 4)
      return src.replace(currentImageLocale, `/${this.locale}/`)
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

const translation = new TranslateModule()

document.addEventListener("DOMContentLoaded", () => {
  translation.init()
});
