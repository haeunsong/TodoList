const weather = document.querySelector(".js-weather");
const API_KEY = "bfde9481fa4b074aa945931f60dd8eb8";
const COORDS = "coords";

function getWeather(lat,lng){
    // 서버로부터 데이터가 들어올 때까지 기다리기
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json(); // 일단 정보를 가져오고
    })
    .then(function(json){ // 끌어다쓴다.
        const temperature = json.main.temp; // console로 해서 데이터확인하면 main의 temp부분의 온도가 있다.
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    });
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
// 좌표가 없을 때만 실행됨.
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   // latitude:latitude,
        longitude   // longitude:longitude 와 같은뜻(양쪽이 같을 떄는 하나만 써도 OK)
    };
    saveCoords(coordsObj)
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Cant access geo location")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();