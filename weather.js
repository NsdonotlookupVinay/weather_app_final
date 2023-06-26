const api_key = "f8ab625482b231795aa326ac377aaa6a";
const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
var data;
async function checkweather(city){
    // var city = document.getElementById("search_bar_input").value
    // if(city == null){
    //     city = "bokaro"
    // }
    const response = await fetch(api_url+`${city}&appid=${api_key}`);
    var data = await response.json();
    document.getElementById("weather_main").innerHTML = data.weather[0].main;
    document.getElementById('location_name').innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data?.main.temp) + "&degC";
    document.getElementById("fealslike").innerHTML = "Feels like ~ "+data.main.feels_like;
    document.getElementById("tempmax").innerHTML = "Max -" +data.main.temp_max + "&degC";
    document.getElementById("tempmin").innerHTML = "Min - "+data.main.temp_min + "&degC";
    document.getElementById("pressure").innerHTML = "Pressure - "+data.main.pressure + "Pa";
    document.getElementById("humidity").innerHTML = "Humidity ~ "+data.main.humidity;
    document.getElementById("wind_speed").innerHTML = "Wind Speed - "+data.wind.speed+ "m/s";
    if(data.weather[0].main =="Clouds"){
        document.getElementById("weather_logo_image").src = "weather_icons/clouds.png"
    }else if(data.weather[0].main =="Clear"){
        document.getElementById("weather_logo_image").src = "weather_icons/clear_sky.png"
    }else if(data.weather[0].main =="Snow"){
        document.getElementById("weather_logo_image").src = "weather_icons/snow.png"
    }else if(data.weather[0].main =="Rain"){
        document.getElementById("weather_logo_image").src = "weather_icons/rain_clouds.png"
    }else if(data.weather[0].main =="Thunderstorm"){
        document.getElementById("weather_logo_image").src = "weather_icons/thunder_storm.png"
    }else if(data.weather[0].main =="Mist"){
        document.getElementById("weather_logo_image").src = "weather_icons/mist.png"
    }
    if(data.main.temp >= 35){
        document.getElementById("temp").style.color = "#ff4757";
    }else if(data.main.temp <=34){
        document.getElementById("temp").style.color = "#1e90ff";
    }else if(data.main.temp <=25){
        document.getElementById("temp").style.color = "#70a1ff";
    }
}
// checkweather("bokaro");

document.getElementById("search_bar_image").onclick = function(){
    checkweather(document.getElementById("search_bar_input").value);
    // weathermain = data.weather[0].main;
    // document.getElementById("weather_main").innerHTML = 
    // document.querySelector(".temp").innerHTML = data?.main;
    // console.log(data);
}
var city = "bokaro"
checkweather(city)