var cityName = document.getElementById('CityName');
var temperature = document.getElementById('temperture');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('WindSpeed');
var searchInput = document.getElementById('searchInput');
var searchIcon = document.getElementById('searc-icon');
var image = document.getElementById('mainImage')
async function check(city){
    let api_key = 'a26982d66ce4347c456d6d1da5ce2d89';
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let response =  await fetch(api_url);
    let course  = await response.json();
    console.log(course);
    cityName.innerHTML =  course.name;
    var temp = course.main.temp - 273.15; //Convert Kelvin to Celsius 
    temperature.innerHTML = Math.floor(temp)+"°C";
    humidity.innerHTML = course.main.humidity + "%";
    wind.innerHTML = Math.floor(course.wind.speed) +"km/h"
    if(course.weather[0].main =='Clouds'){
       image.src ="img/cloud.png"
    }
    if(course.weather[0].main =='Clear'){
        image.src ="img/sunny.webp"
     }
     if(course.weather[0].main =='Rain'){
        image.src ="img/img.png"
     }
     if(course.weather[0].main =='Haze'){
        image.src ="img/haze.webp"
     }
     if(course.weather[0].main =='Sunny'){
        image.src ="img/sunny.webp"
     }
     if(course.weather[0].main =='Drizzle'){
        image.src ="img/windy.png"
     }
     if(course.weather[0].main =='Mist'){
        image.src ="img/mist.webp"
     }

}

searchIcon.addEventListener("click", ()=>{
    check(searchInput.value);
})