import { useState, useEffect } from "react";
import OpenWeatherMap from "openweathermap-ts";
import { CurrentResponse } from "openweathermap-ts/dist/types";
import weatherIcons from "@src/assets/weathericons.json";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { Unit } from "openweathermap-ts/dist/types";

interface OpenWeatherInfoProps {
  apikey: string;
  cityName: string;
  language: string;
  units: Unit;
}

function toTime(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000)
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .toString();
}

function OpenWeatherInfo({
  apikey,
  cityName,
  language,
  units,
}: OpenWeatherInfoProps): JSX.Element {
  const openWeather = new OpenWeatherMap({
    // TODO: Set these values in global settings
    apiKey: apikey,
    language: language,
    units: units,
  });

  const [response, setResponse] = useState<CurrentResponse | undefined>();

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await openWeather.getCurrentWeatherByCityName({
          cityName: cityName,
        });
        console.log(response);
        setResponse(response);
      } catch (err) {
        console.error(err);
      }
    }

    fetchWeatherData();
  }, [cityName]);

  if (!response?.main) {
    return <div></div>;
  }

  const actualTemp = Math.round(response.main.temp);
  const iconIndex = response.weather[0].icon;
  const location = response.name;
  const sunrise = toTime(response.sys.sunrise);
  const sunset = toTime(response.sys.sunset);
  const weatherDescription =
    response.weather[0].description.charAt(0).toUpperCase() +
    response.weather[0].description.slice(1);

  return (
    <div>
      <div className="card  bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <div className="grid grid-flow-col">
            <div>
              <h2 className="text-6xl">{actualTemp}°C</h2>
              <p>{weatherDescription}</p>
            </div>
            <div>
              <p className="text-8xl">
                {weatherIcons[iconIndex as keyof typeof weatherIcons]}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-2xl flex space-x-3 items-end">
              <CiLocationOn /> {location}
            </h2>
          </div>

          <div className="flex justify-between">
            <p className="flex space-x-3">
              <WiSunrise size={22} /> {sunrise}
              <WiSunset size={22} /> {sunset}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenWeatherInfo;
