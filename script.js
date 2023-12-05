const passwordInputs = document.querySelectorAll(".error");
const [password, passwordConfirm] = passwordInputs;

const errorMessage = document.querySelector(".error-message");

const handleInput = () => {
  const passwordsMatch = password.value === passwordConfirm.value;

  passwordInputs.forEach((passwordInput) => {
    passwordInput.classList.toggle('error', !passwordsMatch);
  });

  errorMessage.textContent = passwordsMatch ? '' : '*passwords do not match';
};

password.addEventListener('input', handleInput);
passwordConfirm.addEventListener('input', handleInput);
