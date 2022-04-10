export class Loader {
  constructor() {
    this.body = document.querySelector("body")
    this.loader = document.querySelector('.preloader')
  }

  hideLoader() {
    this.body.className = ''
    this.loader.className = 'preloader hide'
  }

  showLoader() {
    this.body.className = 'o-hidden'
    this.loader.className = 'preloader'
  }
}
