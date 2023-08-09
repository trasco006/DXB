const getCurrencyRates = () => fetch('https://t.sub.by/api/payment/rates', { method: 'GET' })
  .then((res) => res.text())
  .then(JSON.parse)
  .then(({ rub, byn }) => ({
    rub: Number(rub),
    byn: Number(byn),
    usd: 1
  }))

const costModules = document.querySelectorAll('.cost');

const BORDER_VALUE = 1_000_000;

const businessValues = {
  1: BORDER_VALUE,
  2: 2_000_000,
  3: 3_000_000,
  4: 4_000_000,
  5: 5_000_000,
  6: 6_000_000,
  7: 7_000_000,
  8: 8_000_000,
  9: 9_000_000,
  10: 10_000_000,
};

const rangeValues = {
  1: BORDER_VALUE,
  2: 1_044_000,
  3: 1_088_000,
  4: 1_132_000,
  5: 1_176_000,
  6: 1_220_000,
  7: 1_264_000,
  8: 1_308_000,
  9: 1_352_000,
  10: 1_400_000,
};
const keys = Object.keys(businessValues);

const businessValueToRangeValue = (value) => {
  return BORDER_VALUE + (value - BORDER_VALUE) / (9_000_000 / 400_000);
};

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

  if (subscribers <= 5000) {
    total = 10
  } else if (subscribers > 5000 && subscribers <= 15000) {
    total = 10 + Math.floor((subscribers - 1) / 5000) * 5;
  } else if (subscribers > 15000 && subscribers <= 100000) {
    total = 20 + Math.floor((subscribers - 1) / 10000) * 5;
  } else if (subscribers > 100000) {
    total = 65 + Math.floor((subscribers - 1) / 100000) * 5;
  }

  total = Math.round(total * cost);
  return total;
};

const getElements = (module) => [
  module.querySelectorAll('.cost__currency-value'),
  module.querySelectorAll('.cost__heading-btn'),
  module.querySelector('input[type="range"]'),
  module.querySelector('.cost__subscribers'),
  module.querySelector('.cost__sum'),
]

const changeCurrencyBtnStyle = (btns, selectedCurrency) =>
  btns.forEach(btn =>
    btn.className = btn.id === selectedCurrency
      ? 'cost__currency-value cost__currency-value_active'
      : 'cost__currency-value');


const changePerionBtnStyle = (btn, selectedPeriod) =>
  btn.forEach(btn =>
    btn.className = btn.id === selectedPeriod
      ? 'cost__heading-btn cost__heading-btn_active'
      : 'cost__heading-btn');

const normalizeSubscribersValue = value => +value.replace(/[^0-9]/g, "");

const costLogic = async () => {
  const subscriberCost = await getCurrencyRates();

  costModules.forEach(module => {
    const [currencyButtons, periodButtons, range, subscribersInput, costInput] = getElements(module);

    let selectedCurrency = 'usd';
    let selectedPeriod = 'year';

    const setSelectedCurrency = value => selectedCurrency = value;
    const setSelectedPeriod = value => selectedPeriod = value;
    const calculateCost = (value) => {
      const calculatedCost = calculation(value, subscriberCost[selectedCurrency])
      const sum = selectedPeriod === 'year' ? Math.round(calculatedCost * 0.8) : calculatedCost;
      return sum + " " + currencySymbol[selectedCurrency];
    };
    const changeCost = (value) => costInput.value = calculateCost(value);
    const recalculate = () => changeCost(normalizeSubscribersValue(subscribersInput.value));
    const changeSubscribers = (value) => subscribersInput.value = divideNumberByPieces(value);
    const setRangeValue = value => range.value = value;

    const handleSubscribersInputChange = (value) => {
      changeSubscribers(value || 0);
      changeCost(value);

      if (value < BORDER_VALUE) {
        setRangeValue(value);
        return;
      }

      if (value >= businessValues[10]) {
        setRangeValue(rangeValues[10]);
        return;
      }

      setRangeValue(businessValueToRangeValue(value));
    }
    const handleRangeChange = value => {
      if (value <= BORDER_VALUE) {
        setRangeValue(value);
        changeSubscribers(value);
        changeCost(value)
        return;
      }

      if (value >= rangeValues[10]) {
        setRangeValue(rangeValues[10]);
        changeSubscribers(businessValues[10]);
        changeCost(businessValues[10])
        return;
      }

      keys.forEach((key) => {
        if (value > rangeValues[key - 1] && value < rangeValues[key]) {
          setRangeValue(rangeValues[key]);
          changeSubscribers(businessValues[key]);
          changeCost(businessValues[key])
        }
      });
    }

    const subscribersHandler = value => handleSubscribersInputChange(normalizeSubscribersValue(value))
    subscribersInput.addEventListener('input', subscribersHandler)

    const rangeHandler = ({ target: { value } }) => handleRangeChange(value);
    range.addEventListener('input', rangeHandler);

    currencyButtons.forEach(btn => {
      const { id } = btn

      const handleChangeCurrency = () => {
        changeCurrencyBtnStyle(currencyButtons, id);
        setSelectedCurrency(id);
        recalculate();
      };

      btn.addEventListener('click', handleChangeCurrency)
    });

    periodButtons.forEach(btn => {
      const { id } = btn;

      const btnHandler = () => {
        changePerionBtnStyle(periodButtons, id);
        setSelectedPeriod(id);
        recalculate();
      }

      btn.addEventListener('click', btnHandler)
    })

    const init = () => {
      changeCurrencyBtnStyle(currencyButtons, selectedCurrency);
      changePerionBtnStyle(periodButtons, selectedPeriod);
      handleRangeChange(range.value)
    }

    init();
  });
};

costLogic();
