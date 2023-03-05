import "@pages/newtab/Newtab.css";
import { FadeIn } from "react-slide-fade-in";
import Bookmarks from "./Bookmarks";
import gif from "@assets/img/image-3.gif";
import Navbar from "./NavBar";
import OpenWeatherInfo from "./OpenWeather";
import { Unit } from "openweathermap-ts/dist/types";

import userConfig from "./config.json";
import { Config } from "./Config";

const Newtab = () => {
  const config: Config = userConfig;
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Navbar
        username={config.username}
        language={config.openweather.language}
        theme={config.theme}
      />
      <div className="grid grid-cols-4 gap-4 mt-40">
        <div className="hidden md:block row-span-2">
          <FadeIn
            from="left"
            positionOffset={200}
            triggerOffset={100}
            delayInMilliseconds={20}
          >
            <img
              className="object-scale-dow h-100 w-80 rounded-md"
              src={gif}
              alt="gif animation"
            />
          </FadeIn>
        </div>

        <Bookmarks />
        <div className="row-start-3 col-start-1 hidden md:block">
          <FadeIn
            from="bottom"
            positionOffset={200}
            triggerOffset={100}
            delayInMilliseconds={20}
          >
            <OpenWeatherInfo
              apikey={config.openweather.apikey}
              cityName={config.openweather.location}
              language={parseUnits(config.openweather.units)}
              units="metric"
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

function parseUnits(unitsString: string): Unit {
  switch (unitsString) {
    case "standard":
    case "metric":
    case "imperial":
      return unitsString;
    default:
      console.warn(`Invalid units value: ${unitsString}`);
      return "standard";
  }
}

export default Newtab;
