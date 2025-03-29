export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
