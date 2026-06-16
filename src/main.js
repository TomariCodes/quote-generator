let inputElement = document.getElementById("keyword-input");
let quoteFormElement = document.getElementById("quote-generator-form");
let quoteElement = document.getElementById(`quote-container`);
function generateQuote(event) {
  event.preventDefault();
  let apiKey = "d723abdbd1batbf0d4fo3fa95586fbba";
  let prompt = `Generate a short quote about ${inputElement.value}`;
  let context =
    "You are a wise and insightful quote generator. Your task is to create a short and impactful quote based on the given keyword. If the same keyword is given then provide a different perspective or insight. The quote should be concise, thought-provoking, and relevant to the keyword provided. Use your creativity and wisdom to find a short quote that resonates with the reader and captures the essence of the keyword. Make sure to always credit the author/speaker.";
  console.log("Generating quote...");
  console.log(prompt);
  console.log(context);
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
}

function displayQuote(response) {
  console.log("Quote Generated");
  new Typewriter(quoteElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
quoteFormElement.addEventListener("submit", generateQuote);
