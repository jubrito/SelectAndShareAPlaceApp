import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCXpyHNPV8iLjxJrGk_7SxiqKUIXFC3z7E";

type GoogleGeocodingResponse = {
    results: {
        geometry: { location: { lat: number; lng: number } };
    }[];
    status: "OK" | "ZERO_RESULTS";
};

async function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    //@ts-ignore
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    axios
    .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
            enteredAddress
            )}&key=${GOOGLE_API_KEY}`
            )
            .then((response) => {
            if (response.data.status != "OK") {
                throw new Error("Could not fetch location");
            }
            const coordinates = response.data.results[0].geometry.location;
            const map = new Map(document.getElementById("map") as HTMLElement, {
                center: coordinates,
                zoom: 16,
                mapId: 'app'
            });
            new AdvancedMarkerElement({
                map: map,
                position: coordinates,
                title: "Uluru",
            });
            console.log(response);
        })
        .catch((err) => {
            alert(err.message);
            console.log("Error:" + err);
        });
}
form.addEventListener("submit", searchAddressHandler);
