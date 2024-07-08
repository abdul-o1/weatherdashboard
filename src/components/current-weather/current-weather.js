import "./current-weather.css";
 

const CurrentWeather =() =>
{
    return (
        <div className="weather ">
            <div className="top">
                <p className="city">Kolkata</p>
                <p className="weather-description">cloudy</p>
            </div>
            <img className="weather-icon" alt="weather" src="icons/01d"/>
        </div>
    );
}
export default CurrentWeather;