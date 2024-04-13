//Make fnction that check url and import it here

const confidence = document.querySelector("#results #confidence");

function handleSubmit(event) {
  console.log("eeeee");
  event.preventDefault();

  // Get the URL from the input field
  const formText = document.getElementById("name").value;
  // Client.validURL(JSON.parse(JSON.stringify(formText)))
  if (formText) {
    fetch("http://localhost:3000/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log("res", res);
        confidence.innerHTML = res.subjectivity_confidence;
      });
  }
}

export { handleSubmit };
