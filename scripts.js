document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "f12d4504235b8379b3f31ee1b04bf635";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById(
          "cityName"
        ).textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById(
          "temp"
        ).textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById(
          "description"
        ).textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById(
          "humidity"
        ).textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById(
          "wind"
        ).textContent = `Wind Speed: ${data.wind.speed} m/s`;
        document.querySelector(".weather-info").style.display = "block";
      } else {
        alert("City not found, please try again.");
      }
    })
    .catch((error) => {
      alert("An error occurred while fetching weather data.");
      console.error("Error:", error);
    });
});
