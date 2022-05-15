export default class DictionaryModule {
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
