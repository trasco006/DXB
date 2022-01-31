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

  
  burgerBtn.addEventListener('click', handleBurgerToggle);
};

burgerMenuFunction();
