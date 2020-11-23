import fetchPage from "./fetch-pages.js";

export default class EmailChecker {
  constructor(form) {
    this.form = document.querySelector(form);
    this.input = this.form.querySelector("input[type='email']");

    this.validateEmail = this.validateEmail.bind(this);
    this.check = this.check.bind(this);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.init = this.init.bind(this);
  }

  validateEmail() {
    const regexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (this.input.value.match(regexp)) return true;
  }

  check(event) {
    event.preventDefault();
    if (this.validateEmail()) {
      fetchPage("../success.html");
    } else {
      console.log("Quase lá");
    }
  }

  addEventListeners() {
    this.form.addEventListener("submit", this.check);
  }

  init() {
    this.addEventListeners();

    return this;
  }
}
