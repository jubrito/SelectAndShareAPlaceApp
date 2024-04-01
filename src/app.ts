import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCXpyHNPV8iLjxJrGk_7SxiqKUIXFC3z7E";
function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
        console.log(response)
    })
    .catch((err) => {
      console.log("Error:" + err);
    });
}
form.addEventListener("submit", searchAddressHandler);
