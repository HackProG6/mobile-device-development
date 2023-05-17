const temperatureForm = document.getElementById('temperature-form');
const temperatureInput = document.getElementById('temperature-input');
const output = document.getElementById('output');

temperatureForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let temperatureInFahrenheit = temperatureInput.value;
  let temperatureInCelsius = (temperatureInFahrenheit - 32) * (5/9);
  output.textContent = temperatureInCelsius;
});
