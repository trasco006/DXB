const burgerMenuFunction = () => {
  const headerContainer = document.querySelector('.header');
  const burgerBtn = headerContainer.querySelector('.menu-btn');
  const navMenu = headerContainer.querySelector('.nav-menu');
  const navLink = headerContainer.querySelectorAll('.nav-menu__link')

  function handleBurgerToggle() {
    burgerBtn.classList.toggle('is-active');
    navMenu.classList.toggle('nav-menu_active');
  }


  navLink.forEach(item => {
    if (window.outerWidth < 581) {
      item.addEventListener('click', handleBurgerToggle)
    }
  })

  const handleCloseBurger = (evt) => {
    if (navMenu.classList.contains('nav-menu_active')
      && !evt.target.closest('.nav-menu')
      && !evt.target.closest('.header')
    ) {
      handleBurgerToggle()
    }
  }
  document.addEventListener('click', handleCloseBurger, true)
  burgerBtn.addEventListener('click', handleBurgerToggle);
}
burgerMenuFunction();
