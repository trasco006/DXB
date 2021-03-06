import {CookieModule} from "./cookie";

const getLocale = () => localStorage.getItem('locale')
const getBrowserLocale = () => navigator.language.split('-')[0]
const getCurrentLocale = () => getLocale() || getBrowserLocale()

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
  const submitBtn = form.querySelector('.registration__submit')
  submitBtn.disabled = true;
  const referralCookie = CookieModule.get('referral')

  return fetch('https://igame.by/api/users/quick', {
    method: 'POST',
    body: data,
    credentials: 'include',
    redirect: 'follow',
    headers: {
      'Accept-Language': getCurrentLocale(),
      'Set-Cookie': `locale=${getCurrentLocale()}, ${referralCookie ? 'referral=' + referralCookie : ''}`
    }
  }).then((res) => res.text())
    .then(body => JSON.parse(body))
    .then(data => {
      if (errors[data.result]) {
        errorHandler(data.message, form);
      } else {
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('account', JSON.stringify(data.account));
        CookieModule.set('locale', getCurrentLocale(), 1825)
        CookieModule.set('account', JSON.stringify(data.account))
        window.location.href = '/panel';
      }
    })
    .catch(err => {
      errorHandler("Что-то пошло не так", form);
    })
    .finally(() => {
      submitBtn.disabled = false;
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
