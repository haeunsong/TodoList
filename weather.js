const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   // latitude:latitude,
        longitude   // longitude:longitude 와 같은뜻(양쪽이 같을 떄는 하나만 써도 OK)
    };
    saveCoords(coordsObj)
}
function handleGeoError(){
    console.log("Cant access geo location")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords===null){
        askForCoords();
    }else{

    }
}
function init(){
    loadCoords();
}
init();