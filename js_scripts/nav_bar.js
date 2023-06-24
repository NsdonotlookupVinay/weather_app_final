var dark_on = false;
document.getElementById("switch").onclick = function(){
    if(dark_on == false){
        document.getElementById("switch").style.backgroundColor = "#FFFFFF";
        document.getElementById("search_bar_input").style.color = "#FFFFFF"
        document.body.style.backgroundColor = "var(--main-colour)"
        document.getElementById("line1").style.color = "#f1f2f6"
        document.getElementById("search_bar_input").style.color = "#f1f2f6"
        document.getElementById("weatherall").style.backgroundColor = "#576574"
        document.getElementById("weather1").style.backgroundColor = "var(--main-colour)"
        document.getElementById("weather_main").style.color = "#c8d6e5"
        // ---------------------
        document.getElementById("fealslike").style.color = "#c8d6e5"
        document.getElementById("tempmax").style.color = "#c8d6e5"
        document.getElementById("tempmin").style.color = "#c8d6e5"
        document.getElementById("humidity").style.color = "#c8d6e5"
        document.getElementById("pressure").style.color = "#c8d6e5"
        document.getElementById("wind_speed").style.color = "#c8d6e5"

        document.getElementById("temperature").style.color = "#1dd1a1"
        document.getElementById("atmosphere").style.color = "#54a0ff"
        document.getElementById("wind").style.color = "#48dbfb"
        // ---------------------
        // document.querySelector(".bb").style.color = "#FFFFFF"
        // document.querySelector(".side_info").style.color = "#FFFFFF"
        dark_on = true;
    }else if(dark_on != false){
        document.getElementById("switch").style.backgroundColor = "#000000";
        document.getElementById("search_bar_input").style.color = "var(--main-colour)"
        document.body.style.backgroundColor = "#FFFFFF"
        document.getElementById("line1").style.color = "var(--main-colour)"
        document.getElementById("search_bar_input").style.color = "var(--main-colour)"
        document.getElementById("weatherall").style.backgroundColor = "#f1f2f6"
        document.getElementById("weather1").style.backgroundColor = "#FFFFFF"
        document.getElementById("weather_main").style.color = "var(--main-colour)"
        // ---------------------
        document.getElementById("fealslike").style.color = "var(--main-colour)"
        document.getElementById("tempmax").style.color = "var(--main-colour)"
        document.getElementById("tempmin").style.color = "var(--main-colour)"
        document.getElementById("humidity").style.color = "var(--main-colour)"
        document.getElementById("pressure").style.color = "var(--main-colour)"
        document.getElementById("wind_speed").style.color = "var(--main-colour)"


        document.getElementById("temperature").style.color = "#58B19F"
        document.getElementById("atmosphere").style.color = "#3B3B98"
        document.getElementById("wind").style.color = "#1B9CFC"
        // ---------------------
        // document.querySelector(".bb").style.color = "var(--main-colour)"
        // document.querySelector(".side_info").style.color = "var(--main-colour)"
        dark_on = false;
    }
    
}
 