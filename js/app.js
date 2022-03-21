(function () {
  "use strict";
  const heroForm = document.querySelector(".js-heroForm");
  const heroAlert = document.querySelector(".js-heroAlert");

  const showEmailForm = () => {
    heroForm.removeAttribute("hidden");
  };

  const showAlertMessage = () => {
    heroAlert.removeAttribute("hidden");
    heroAlert.setAttribute("role", "alert");
  };

  const hideAlertMessage = () => {
    heroAlert.setAttribute("hidden", "");
    heroAlert.removeAttribute("role");
  };

  const validateEmail = event => {
    const heroInput = document.querySelector(".js-heroInput");
    const email = heroInput.value;
    const emailValidation =
      /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
    const isEmailInvalid = !emailValidation.test(email);

    if (isEmailInvalid) {
      event.preventDefault();
      showAlertMessage();
      setTimeout(hideAlertMessage, 3000);
    }
  };

  window.addEventListener("DOMContentLoaded", showEmailForm);
  heroForm.addEventListener("submit", validateEmail);
})();
