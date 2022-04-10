export class Loader {
  constructor() {
    this.loader = document.querySelector('.preloader')
  }

  hideLoader() {
    this.loader.className = 'preloader hide'
  }

  showLoader() {
    this.loader.className = 'preloader'
  }
}
