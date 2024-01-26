const apiKey="9024918f09bda0a96688f86a2b5e3d25";
            const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            const searchBox=document.querySelector(".search input");
            const searchButton=document.querySelector(".search button");
            const myButton=document.getElementById("mybutton");
            const weatherIcon=document.querySelector(".weathericon");

            async function testWeather(city){
                const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
                if(response.status==404){
                    document.querySelector(".error").style.display="block";

                    document.querySelector(".climate").style.display="none";
                }
                else{
                    let data = await response.json();
                console.log(data);

                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
                document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
                document.querySelector(".wind").innerHTML=data.wind.speed+"mph";
                document.querySelector(".feelslike").innerHTML=Math.round(data.main.feels_like)+"°c";
                document.querySelector(".pressure").innerHTML=data.main.pressure;
                 
                
                if(data.weather[0].main=="Clouds"){
                    weatherIcon.src="test icones/weather/cloudy.png";
                }
                else if(data.weather[0].main=="Clear"){
                    weatherIcon.src="test icones/weather/sunny.png";
                }
                else if(data.weather[0].main="Drizzle"){
                    weatherIcon.src="test icones/weather/rainy.png";
                }
                else if(data.weather[0].main="Rain"){
                    weatherIcon.src="test icones/weather/thunderstrom.png";
                }
                else if(data.weather[0].main="Mist"){
                    weatherIcon.src="test icones/weather/snowy.png.png";
                }
                document.querySelector(".climate").style.display="block";
                document.querySelector(".error").style.display="none";

                }
                
            }    
        searchButton.addEventListener("click",(e)=>{
            testWeather(searchBox.value);
            console.log(e)
            })