function getWeatherInfo()
{
      
    const API_KEY = "82eaa8aeadf5313fb7f53861e086fc28";
    const city =  document.getElementById("city").value;
 
    if(!city)
    {
        alert("Please enter the City Name");
        return ;
    }
    

    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    currentWeather(currentWeatherURL);

}

async function currentWeather(currentWeatherURL){
    
    try{
    const weatherInfo = await fetch(currentWeatherURL);
    const response = await weatherInfo.json();
     
     displayData(response);  
    }
    catch(error)
    {
       console.log(`There is an error showing the data : ${error}`)
          
    }

}


function displayData(weatherData){
       
    const tempDivInfo = document.getElementsByClassName("temp-div");
    const weatherInfo =  document.getElementsByClassName("weather-info")
    const  weatherIcon =  document.getElementById("weather-icon");

    
    tempDivInfo.innerHTML ="";
    weatherInfo.innerHTML ="";

    
    if(weatherData.cod=='404')
    {
        weatherInfo.innerHTML = `<p>${weatherData.message}</p>`;
    }
    else{
        const cityName = weatherData.name;
        const temprature = Math.round(weatherData.main.temp - 273.15);
        const discription = weatherData.weather[0].description;
        const iconCode = weatherData.weather[0].icon;
        const iconURL =`https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    

        const tempratureHTML = ` <p>${temprature}°C</p>`;

        const weatherHTML =`
             <p>${cityName}<p>
             <p>${discription}<p>
        `;


        tempDivInfo.innerHTML = tempratureHTML;
        weatherInfo.innerHTML = weatherHTML;
        weatherIcon.src = iconURL;
        weatherIcon.alt =discription;

        showImage();
    }

}

function showImage()
{
    const weatherIcon =  document.getElementById("weather-icon")
    weatherIcon.style.display = 'block';
}







