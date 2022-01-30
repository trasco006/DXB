const errors = {
  102: "Name validation error",
  103: "Email validation error",
  104: "Instagram validation error",
  105: "Email already used",
  106: "Instagram validation error",
}

const errorHandler = (message, form) => {
  const errorMessage = form.querySelector('.registration__error');
  errorMessage.innerHTML = message
  errorMessage.className = "registration__error registration__error_active"
}

const registrationService = (data, form) => {
  return fetch('https://igame.by/api/users/quick', {
    method: 'POST',
    body: data,
    credentials: 'include',
    redirect: 'follow'
  }).then((res) => res.text())
    .then(body => JSON.parse(body))
    .then(data => {
      if (errors[data.result]) {
        errorHandler(data.message, form);
      } else {
        document.cookie = `token=[${data.token}]`
        document.cookie = `account=[${JSON.stringify(data.account)}]`
        window.location.href = 'https://igame.by/panel/'
      }
    })
    .catch(err => {
      errorHandler("Что-то пошло не так", form);
    })
}

const registrationModulesList = document.querySelectorAll('.registration')

const registration = () => {
  registrationModulesList.forEach(module => {
    const form = module.querySelector('.registration__form');

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(form)

      try {
        registrationService(data, form)
      } catch (err) {
        console.log(err)
      }
    }

    form.addEventListener('submit', handleSubmit)
  })
}
registration()
