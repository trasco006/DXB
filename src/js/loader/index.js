export class Loader {
  constructor() {
    this.body = document.querySelector("body")
    this.loader = document.querySelector('.preloader')
  }

  hideLoader() {
    this.body.classList.remove('o-hidden')
    this.loader.classList.add('hide')
  }

  showLoader() {
    this.body.classList.add('o-hidden')
    this.loader.classList.remove('hide')
  }
}
