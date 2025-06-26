function displayPoem(response) {
    let poemTopic = document.querySelector("#Poem-topic");
    let inputData = document.querySelector("#topic-input");
    let summaryOutput = document.querySelector("#summary-output");
    poemTopic.innerHTML =
      inputData.value.charAt(0).toUpperCase() + inputData.value.slice(1);
    summaryOutput.classList.remove("blink");
  new Typewriter("#summary-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let inputData = document.querySelector("#topic-input");
  let languageInput = document.querySelector("#language-input");
  let summaryOutput = document.querySelector("#summary-output");
  let poemTopic=document.querySelector("#Poem-topic");
  summaryOutput.innerHTML = "Generating poem... ✨";
  summaryOutput.classList.add("blink");
  poemTopic.innerHTML =
    inputData.value.charAt(0).toUpperCase() + inputData.value.slice(1);
  let apiKey = "7c5aat1b3ae474276352o70035f7ac23";
  let prompt = `Generate a poem about ${inputData.value} in ${languageInput.value} `;
  let context =
    "You are a literature expert fluent in every language and passionate about writing short to mid-length poems on a variety of topics. Do not explain anything — just return the poem. Use a poetic tone and rich literary expressions. Write a short and creative poem (4 to 8 lines) about the given topic, in the given language. The poem should be expressive, imaginative, and clearly reflect the theme. Avoid translations — write it natively in the target language, as a native poet would.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#topic-form");
poemElement.addEventListener("submit", generatePoem);
