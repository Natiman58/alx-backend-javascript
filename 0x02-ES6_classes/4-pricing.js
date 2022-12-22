import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // If the new currency isn't type of the Currency class raise error
  set currency(newCurrency) {
    if (!((newCurrency) instanceof Currency)) throw TypeError('currency must have the same instance as of Currency Class');
    this._currency = newCurrency;
  }

  // Method that returns attributes in the the format <amount> <currency_name>
  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
