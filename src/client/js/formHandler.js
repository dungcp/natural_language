//Make fnction that check url and import it here

// const form = document.getElementById("urlForm");
const confidence = document.querySelector("#results #confidence");
// form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  console.log("eeeee");
  event.preventDefault();

  // Get the URL from the input field
  const formText = document.getElementById("name").value;
  if (Client.validURL(JSON.parse(JSON.stringify(formText)))) {
    fetch("http://localhost:8080/article", {
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
  // Check if the URL is valid

  // If the URL is valid, send it to the server
}

// Function to send data to the server

export { handleSubmit };
