let inputCity = document.getElementById("input-tag");
let searchButton = document.getElementById("btn-search");
let report = document.getElementById("weather-report");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '643246f54fmsha95b1ec54f74770p172735jsn1c09b3df715d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(city){
    report.innerHTML = `<h2>Loading...</h2`;
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
    // response.then((data)=>data.json()).then((Fdata)=>showWeather(Fdata));
    const result = await response.json();
    return showWeather(result);
}

function showWeather(data){
    console.log(data);
    if(data.temp === undefined){
        report.innerHTML=`<h2>City not found</h2>`;
        return;
    }
    report.innerHTML=`<h2>${inputCity.value}</h2>
    <h3>Temperature  : ${data.temp}</h3>
    <h3>Feels Like   : ${data.feels_like}</h3>
    <h3>Wind Speed   : ${data.wind_speed}</h3>`
    return;
}


searchButton.addEventListener('click', function(){
    let city = inputCity.value;
    return getWeather(city);
})

