let Country = JSON.parse(localStorage.getItem("selected_price")) ?? null;

const CurrencyConversion = (price) => {
  if (parseFloat(price) && Country) {
    if (Country.currencyAlias === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: Country.currencyAlias,
        minimumFractionDigits: 0,
      }).format(Math.round(parseFloat(price) / Country.fxConversionRate ?? 0));
    } else {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: Country.currencyAlias,
        minimumFractionDigits: 0,
      }).format(Math.round(parseFloat(price) / Country.fxConversionRate ?? 0));
    }
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(Math.round(parseFloat(price ?? 0)));
};

export default CurrencyConversion;
