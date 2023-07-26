const costModules = document.querySelectorAll('.cost');

const currencySymbol = {
  usd: '$',
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
    total = 10 * cost;
  } else if (subscribers > 5000 && subscribers <= 10000) {
    total = 15 * cost;
  } else if (subscribers > 10000 && subscribers <= 20000) {
    total = 20 * cost;
  } else if (subscribers > 20000 && subscribers <= 30000) {
    total = 25 * cost;
  } else if (subscribers > 30000 && subscribers <= 40000) {
    total = 30 * cost;
  } else if (subscribers > 40000 && subscribers <= 50000) {
    total = 35 * cost;
  } else if (subscribers > 50000 && subscribers <= 65000) {
    total = 40 * cost;
  } else if (subscribers > 65000 && subscribers <= 80000) {
    total = 45 * cost;
  } else if (subscribers > 80000 && subscribers <= 100000) {
    total = 50 * cost;
  } else {
    total = Math.round(50 + Math.floor((subscribers - 1) / 100000) * 5) * cost;
  }

  total = Math.round(total);
  return total;
};

const costLogic = async () => {
  const subscriberCost = await fetch('https://t.sub.by/api/payment/rates', {
    method: 'GET',
  })
    .then((res) => res.text())
    .then(JSON.parse)
    .then(({ rub, byn }) => {
      return {
        rub: Number(rub),
        byn: Number(byn),
        usd: 1
      }
    })

  costModules.forEach(module => {
    let selectedCurrency = 'usd';
    let selectedPeriod = 'year';

    const currencyButtons = module.querySelectorAll('.cost__currency-value');
    const periodButtons = module.querySelectorAll('.cost__heading-btn');

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

    const changePerionBtnStyle = () => {
      periodButtons.forEach(btn => {
        if (btn.id === selectedPeriod) {
          btn.className = 'cost__heading-btn cost__heading-btn_active';
        } else {
          btn.className = 'cost__heading-btn';
        }
      });
    };


    periodButtons.forEach(btn => {
      const btnHandler = () => {
        selectedPeriod = btn.id
        rangeHandler()
        changePerionBtnStyle();
      }

      btn.addEventListener('click', btnHandler)
    })

    const handleChangeCurrency = ({ target }) => {
      selectedCurrency = target.id;
      rangeHandler();
      changeCurrencyBtnStyle();
    };

    currencyButtons.forEach(btn => {
      btn.addEventListener('click', handleChangeCurrency);
    });

    const getSumValue = (value) => {
      const calculatedSum = calculation(value, subscriberCost[selectedCurrency])
      const sum = selectedPeriod === 'month' ? Math.round(calculatedSum * 1.2) : calculatedSum;

      return sum + " " + currencySymbol[selectedCurrency];
    };

    const setSumValue = (value) => sumInput.value = getSumValue(value);

    const setRangeValue = (value) => range.value = value || 0;

    const setSubscribersValue = (value) => subscribersInput.value = divideNumberByPieces(value);
    
    const rangeHandler = function () {
      const newValue = range.value;

      setSubscribersValue(newValue);
      setSumValue(newValue);
    };

    const changeSubscribers = function () {
      const newValue = +this.value.replace(/[^0-9]/g, "");

      setSubscribersValue(newValue || 0);
      setRangeValue(newValue)
      setSumValue(newValue);
    }

    changeCurrencyBtnStyle();
    rangeHandler();

    subscribersInput.addEventListener('input', changeSubscribers)
    range.addEventListener('input', rangeHandler);
  });

};

costLogic();
