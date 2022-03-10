let Country = "USA";

const CurrencyConversion = (price) => {
  if (price && parseFloat(price) !== 0) {
    if (Country === "US") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(Math.round(parseFloat(price) / 60 ?? 0));
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
      }).format(Math.round(parseFloat(price ?? 0)));
    }
  }
};
export default CurrencyConversion;
