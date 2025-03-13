let temp=document.querySelector("#temp");
let humidity=document.querySelector("#humi");
let wind=document.querySelector("#wind");
let btn=document.querySelector("#btn");
let city=document.querySelector("#city");
let country=document.querySelector("#country");
let cls=document.querySelector(".hide");
//  let res=navigator.geolocation.getCurrentPosition((position)=>{
//     let lati=position.coords.latitude;
//     let longi=position.coords.longitude;
//      weatherrep(lati,longi);
// });
// let APIkey="7c5db330248f0f50795b81924415a6b9";
// const weatherrep= async (lati,longi)=>{
//     let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${APIkey}&units=metric`;
//     let response= await fetch(URL);
//     let data=await response.json();
//     city.innerText=`city:${data.name}`;
//     country.innerText=`country:${data.sys.country}`;
//     temp.innerText=`Temperature: ${data.main.temp}°K`;
//     humidity.innerText=`humidity:${data.main.humidity}%`;
//     wind.innerText=`wind:${data.wind.speed}km/h`;
// };

// using ciy name
const getloc=async(city)=> {
let url=`https://nominatim.openstreetmap.org/search?format=json&q=${city}`;
let response=await fetch(url);
let data=await response.json(); 
console.log(`latitude:${data[0].lat}, longitude:${data[0].lon}`);
let lati=data[0].lat;
let longi=data[0].lon;
getrep(data[0].lat,data[0].lon);
}
let APIkey="7c5db330248f0f50795b81924415a6b9";
let getrep=async(lati,longi)=>{
let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${APIkey}&units=metric`;
let resp=await fetch(URL);
let dat=await resp.json();
    temp.innerText=`Temperature: ${dat.main.temp}°C`;
    humidity.innerText=`humidity:${dat.main.humidity}%`;
    wind.innerText=`wind:${dat.wind.speed}km/h`;
    cls.style.display = "none";
};
function getname(){
    x=document.getElementById("text").value;
    getloc(x);
}
