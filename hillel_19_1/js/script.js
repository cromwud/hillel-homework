// script.js

// Собираем URL динамически, используя данные из config.js
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${WEATHER_CONFIG.LAT}&lon=${WEATHER_CONFIG.LON}&appid=${WEATHER_CONFIG.API_KEY}&units=${WEATHER_CONFIG.UNITS}&lang=${WEATHER_CONFIG.LANG}`;

// Находим элементы в DOM
const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temp');
const descElement = document.getElementById('desc');
const refreshBtn = document.getElementById('refresh-btn');

// Наша асинхронная функция
async function getWeather() {
    try {
        cityElement.textContent = "Оновлення...";
        
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status}`);
        }
        
        const data = await response.json();
        updateUI(data);
        
    } catch (error) {
        console.error("Помилка:", error);
        cityElement.textContent = "Помилка завантаження";
        tempElement.textContent = "--°C";
        descElement.textContent = "Не вдалося отримати дані";
    }
}

// Функция отрисовки данных
function updateUI(data) {
    cityElement.textContent = data.name; 
    tempElement.textContent = `${Math.round(data.main.temp)}°C`; 
    descElement.textContent = data.weather[0].description; 
}

// Навешиваем слушатели событий
refreshBtn.addEventListener('click', getWeather);

// Первый запуск при загрузке страницы
getWeather();