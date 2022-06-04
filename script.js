const textEl = document.querySelector("#text-el");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector(".message");
const isPalindrome = "yes it is palindrome!";
const isnotPalindrome = "nope it's not palindrome!";
let timerId;

function checkPalindrome(text) {
  if (text) {
    textEl.value = "";
    const reversedText = Array.from(text).reverse().join("");
    message.textContent = reversedText == text ? isPalindrome : isnotPalindrome;

    if (message.textContent == isPalindrome) {
      message.classList.add("palindrome");
    } else {
      message.classList.remove("palindrome");
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      message.textContent = "";
    }, 1200);
  }
}

checkBtn.addEventListener("click", () => checkPalindrome(textEl.value));

window.addEventListener("keypress", (key) => {
  if (key.code == "Enter") {
    checkPalindrome(textEl.value);
  }
});

window.addEventListener("DOMContentLoaded", () => textEl.focus());
