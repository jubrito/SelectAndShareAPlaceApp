const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCXpyHNPV8iLjxJrGk_7SxiqKUIXFC3z7E';
const mapsApiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${GOOGLE_API_KEY}`

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInput.value;
}

form.addEventListener('submit', searchAddressHandler)