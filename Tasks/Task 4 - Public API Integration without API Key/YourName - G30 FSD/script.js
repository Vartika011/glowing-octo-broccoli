<script>
function getWeather() {
const lat = document.getElementById("lat").value;
const lon = document.getElementById("lon").value;
if (!lat || !lon) {
document.getElementById("output").innerText = "Please enter latitude and longitude";
return;
}
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
fetch(url)
.then(response => response.json())
.then(data => {
const weather = data.current_weather;
document.getElementById("output").innerHTML = `
Temperature: ${weather.temperature} °C <br>
Wind Speed: ${weather.windspeed} km/h <br>
Weather Code: ${weather.weathercode}
`;
})
.catch(error => {
document.getElementById("output").innerText = "Error fetching weather data";
console.error(error);
});
}
</script>
