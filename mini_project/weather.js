import readline from "readline/promises"

const API_KEY = "9e82400256ad7da2d472f35560bd0e5f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getWeather = async (city) => {
   const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("city not found")
        }
        const weatherData = await response.json();
        console.log(`City: ${weatherData.name}`);
        console.log(`Temprature: ${weatherData.main.temp}C`);
        console.log(`Description ${weatherData.weather[0].description}`);
    } catch (err) {
        console.log(err);
    }
}

const city = await rl.question("Enter a city name to get its weather:");
await getWeather(city);
rl.close()