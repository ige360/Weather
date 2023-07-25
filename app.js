const apiKey = "8624516b59b3c12655c2abf4436c644f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image");


async function checkWeather(city){
  const response = await fetch(url + city + `&appid=${apiKey}`);


 if(response.status == 404){
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";
 } else {


  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".weatherDescription").innerHTML = (data.weather[0].description).toUpperCase();

  if(data.weather[0].main == "Clouds"){
    weatherImage.src = "images/cloud.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherImage.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherImage.src = "images/rain.png";
      }
  else if(data.weather[0].main == "snow"){
    weatherImage.src = "images/snow.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherImage.src = "images/mist.png";
      }
  

  document.querySelector(".weather").style.display = "block";

}
}


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});


