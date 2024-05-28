var container = document.querySelector("#container");
var search = document.querySelector("#searchBox button");
var weatherBox = document.querySelector(".weatherBox");
var weatherDetail = document.querySelector(".weatherDetail");

search.addEventListener("click", function () {
    var APIkey = '14951c93f3d11e8ac8bed96dd90e8bc7';
    const city = document.querySelector("#searchBox input").value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weatherBox img');
            const temp = document.querySelector('.weatherBox .temp');
            const description = document.querySelector('.weatherBox .discription');
            const humidity = document.querySelector('.weatherDetail .humidity span');
            const wind = document.querySelector('.weatherDetail .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Cloud':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                case 'Haze':
                    image.src = 'images/haze.png';
                    break;
                default:
                    image.src = 'images/cloud.png';
            }

            temp.innerHTML = `${json.main.temp}<span>°C</span>`;
            description.textContent = json.weather[0].description;
            humidity.textContent = `${json.main.humidity}%`;
            wind.textContent = `${json.wind.speed} Km/h`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
