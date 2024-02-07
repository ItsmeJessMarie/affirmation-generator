function displayAffirmation(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1bf547ta2a3986bceb80d3bcaob62269";
  let context =
    "You are a positive affirmation expert and love to write short positive heartfelt sentences to make people happy. Your mission is to generate a single sentence positive affirmation. Follow example with text centered: <h2>Please repeat this affirmation:</h2><p>I am enough<p>. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate a positive affirmation about ${userInstructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating affirmation");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#positive-affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
