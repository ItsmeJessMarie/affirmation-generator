function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("#affirmation", {
    strings: "I am enough",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let affirmationFormElement = document.querySelector(
  "#positive-affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
