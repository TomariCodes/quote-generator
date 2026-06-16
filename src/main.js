let inputElement = document.getElementById('keyword-input')
let quoteFormElement = document.getElementById("quote-generator-form");
let quoteElement = document.getElementById(`quote-container`);
function generateQuote(event) {
  event.preventDefault();
  alert("Generating quote...");
  new Typewriter(quoteElement, {
    strings: [`The only way to do great work is to love what you do. - Steve Jobs`, `Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill`, `Believe you can and you're halfway there. - Theodore Roosevelt`],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
quoteFormElement.addEventListener("submit", generateQuote);
