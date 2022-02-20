const benefits = () => {
  const benefitsListModules = document.querySelectorAll('.benefits')

  const handleButtonClick = ({target}, container, columns) => {
    const tab = target.dataset.tab
    if (tab === '2') {
      columns.className = 'benefits__columns benefits__columns_active'
      container.className = 'benefits__container benefits__container_active'
    } else {
      columns.className = 'benefits__columns benefits__columns'
      container.className = 'benefits__container'
    }
  }

  benefitsListModules.forEach(module => {
    const columns = module.querySelector('.benefits__columns')
    const container = module.querySelector('.benefits__container')
    const buttonsList = module.querySelectorAll('.benefits__button')

    buttonsList.forEach(button => {
      button.addEventListener('click', (e) => handleButtonClick(e, container, columns))
    })
  })
}

benefits()
