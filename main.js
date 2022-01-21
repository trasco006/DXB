const burgerMenuFunction = () => {
  const headerContainer = document.querySelector('.header');
  const burgerBtn = headerContainer.querySelector('.menu-btn');
  const navMenu = headerContainer.querySelector('.nav-menu');

  function handleBurgerToggle() {
    this.classList.toggle('is-active');
    navMenu.classList.toggle('nav-menu_active');
  }

  burgerBtn.addEventListener('click', handleBurgerToggle);
};

burgerMenuFunction();
