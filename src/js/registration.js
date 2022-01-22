const errors = {
  401: "Email уже используется",
  402: "аккаунт Instagram уже используется",
  106: "аккаунт Instagram должен быть введён корректно",
  500: "неизвестная ошибка",
}

const errorHandler = (code, form) => {
  const errorMessage = form.querySelector('.registration__error');
  errorMessage.innerHTML = errors[code] || errors[500];
  errorMessage.className = "registration__error registration__error_active"
}

const registrationService = (data) => {
  return fetch('https://sub.by/api/users/quick', {
    method: 'POST',
    body: data,
  });
}

const registrationModulesList = document.querySelectorAll('.registration')

const registration = () => {
  registrationModulesList.forEach(module => {
    const form = module.querySelector('.registration__form');

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(form)

      registrationService(data)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            window.location.href = 'https://vk.com'
            return;
          }
          errorHandler(res.status, form);
        })
    }

    form.addEventListener('submit', handleSubmit)
  })
}

registration()
