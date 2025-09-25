function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=<>?/{}[]|";

  let allChars = "";
  if (includeUppercase) allChars += upper;
  if (includeLowercase) allChars += lower;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("password").value = password;
  checkStrength(password);
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.value === "") {
    alert("No password to copy!");
    return;
  }
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

function checkStrength(password) {
  let strength = "Weak";
  if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
    strength = "Strong";
  } else if (password.length >= 6) {
    strength = "Medium";
  }
  document.getElementById("strength").textContent = "Strength: " + strength;
}