const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44e53a6f18mshc0e08c8dbf3f741p10b1bejsn25228c67546e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city)=>{

cityName.innerHTML = city;
async function fetchWeather() {
  try {
    const response = await fetch(url+city, options);
    const result = await response.json(); // Parse response as JSON
    console.log(result);

    // cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  

  } catch (error) {
    console.error(error);
  }
}

fetchWeather();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")