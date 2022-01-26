const costModules = document.querySelectorAll('.cost');

const subscriberCost = {
  dollar: 0.016,
  byn: 0.032,
  rub: 0.1,
};

const currencySymbol = {
  dollar: '$',
  byn: 'BYN',
  rub: 'RUB',
};

const divideNumberByPieces = (sum, delimiter) => {
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || '.');
};

const calculation = (subscribers, cost) => {
  let total = 0;
  if (subscribers == 0) {
    total = 0;
  } else if (subscribers > 0 && subscribers <= 5000) {
    total = 630 * cost;
  } else if (subscribers > 5000 && subscribers <= 10000) {
    total = 950 * cost;
  } else if (subscribers > 10000 && subscribers <= 20000) {
    total = 1340 * cost;
  } else if (subscribers > 20000 && subscribers <= 30000) {
    total = 1675 * cost;
  } else if (subscribers > 30000 && subscribers <= 40000) {
    total = 2010 * cost;
  } else if (subscribers > 40000 && subscribers <= 50000) {
    total = 2345 * cost;
  } else if (subscribers > 50000 && subscribers <= 65000) {
    total = 2680 * cost;
  } else if (subscribers > 65000 && subscribers <= 80000) {
    total = 3015 * cost;
  } else if (subscribers > 80000 && subscribers <= 100000) {
    total = 3350 * cost;
  } else if (subscribers > 100000 && subscribers <= 200000) {
    total = 3685 * cost;
  } else if (subscribers > 200000 && subscribers <= 300000) {
    total = 4020 * cost;
  } else if (subscribers > 300000 && subscribers <= 400000) {
    total = 4355 * cost;
  } else if (subscribers > 400000 && subscribers <= 500000) {
    total = 4690 * cost;
  } else if (subscribers > 500000 && subscribers <= 600000) {
    total = 5025 * cost;
  } else if (subscribers > 600000 && subscribers <= 700000) {
    total = 5360 * cost;
  } else if (subscribers > 700000 && subscribers <= 800000) {
    total = 5695 * cost;
  } else if (subscribers > 800000 && subscribers <= 900000) {
    total = 6030 * cost;
  } else if (subscribers > 900000 && subscribers <= 1000000) {
    total = 6365 * cost;
  } else {
    total = Math.round(6365 + ((subscribers - 1000000) / 100000) * 67 * 5) * cost;
  }

  total = Math.round(total);
  return total;
};

const costLogic = () => {

  costModules.forEach(module => {
    let selectedCurrency = 'dollar';
    const currencyButtons = module.querySelectorAll('.cost__currency-value');
    const range = module.querySelector('input[type="range"]');
    const subscribersInput = module.querySelector('.cost__subscribers');
    const sumInput = module.querySelector('.cost__sum');

    const changeCurrencyBtnStyle = () => {
      currencyButtons.forEach(btn => {
        if (btn.id === selectedCurrency) {
          btn.className = 'cost__currency-value cost__currency-value_active';
        } else {
          btn.className = 'cost__currency-value';
        }
      });
    };

    const handleChangeCurrency = ({target}) => {
      selectedCurrency = target.id;
      rangeHandler();
      changeCurrencyBtnStyle();
    };

    currencyButtons.forEach(btn => {
      btn.addEventListener('click', handleChangeCurrency);
    });

    const rangeHandler = function () {
      const newValue = range.value;
      subscribersInput.value = divideNumberByPieces(newValue);
      sumInput.value = `${calculation(newValue, subscriberCost[selectedCurrency])} ${currencySymbol[selectedCurrency]}`;
    };

    const changeSubscribers = function () {
      const newValue = +this.value.replace('.', '') || 0;
      range.value = newValue || 0
      subscribersInput.value = divideNumberByPieces(newValue);
      sumInput.value = `${calculation(newValue, subscriberCost[selectedCurrency])} ${currencySymbol[selectedCurrency]}`;
    }
    changeCurrencyBtnStyle();
    rangeHandler();
    subscribersInput.addEventListener('input', changeSubscribers)
    range.addEventListener('input', rangeHandler);
  });

};

costLogic();
