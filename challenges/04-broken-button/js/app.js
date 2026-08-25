const button = document.getElementById("clickMe");
const message = document.getElementById("message");

let count = 0;

button.addEventListener("click", function () {
  count++;
  message.textContent = "Clicked " + count + " time(s)";
});
