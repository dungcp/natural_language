function handleSubmit(event) {
  event.preventDefault();
  const formText = document.getElementById("name").value.trim();
  const error_section = document.querySelector("section.errors");
  const error = document.querySelector("section.errors #error");
  const confidence = document.querySelector("#results #confidence");
  const polarity = document.querySelector("#polarity");
  const subjectivity = document.querySelector("#subjectivity");
  const factual = document.querySelector("#subjectivity_factual");
  const text = document.querySelector("#text");

  if (Client.validURL(JSON.parse(JSON.stringify(formText)))) {
    fetch("http://localhost:8081/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: formText }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(function (res) {
        error_section.style.display = "none";
        confidence.innerHTML = res.polarity_positive;
        polarity.innerHTML = res.polarity;
        subjectivity.innerHTML = res.subjectivity1;
        factual.innerHTML = res.subjectivity_factual;
        text.innerHTML = res.text;
      });
  } else {
    error.innerHTML =
      "The URL:[" +
      JSON.stringify(formText) +
      "] is not valide, enter a valid url";
    error_section.style.display = "block";
    confidence.innerHTML = "";
  }
}

export { handleSubmit };
