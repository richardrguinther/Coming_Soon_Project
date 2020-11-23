import EmailChecker from "./modules/email-checker.js";

function fetchPages() {
  const emailChecker = new EmailChecker("#email_subscriber");
  emailChecker.init();
}

fetchPages();