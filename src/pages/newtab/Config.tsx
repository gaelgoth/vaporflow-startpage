export interface Config {
  username: string;
  openweather: Openweather;
  theme: Theme[];
}

export interface Openweather {
  apikey: string;
  language: string;
  units: string;
  location: string;
}

export interface Theme {
  name: string;
  emoji: string;
  theme: string;
}
