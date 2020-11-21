export default class EmailChecker {
  constructor(form, input) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);

    this.validateEmail = this.validateEmail.bind(this);
    this.onClick = this.onClick.bind(this);
    this.addEmailListener = this.addEventListeners.bind(this);
    this.init = this.init.bind(this);
  }

  validateEmail() {
    this.value = String.toString(this.input.value);

    if (this.value.match(/^[a-z0-9.]@[a-z0-9]\.[a-z]\.([a-z]+)?$/i))
      return true;
  }

  onClick(event) {
    event.preventDefault();
    if (this.validateEmail()) console.log("Email valido!");
    else console.log("Email inválido!");
  }

  addEventListeners() {
    this.form.addEventListener("submit", this.onClick);
  }

  init() {
    this.addEventListeners();
  }
}
