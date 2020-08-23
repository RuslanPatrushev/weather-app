interface Weather {
  main: string,
  description: string,
  icon: string
}

interface Main {
  temp: number,
  pressure: number,
  humidity: number,
}

interface Wind {
  speed: number,
  deg: number,
  description: string
}

interface Clouds {
  all: number
}

export interface WeatherData {
  weather: Weather;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  name: string;
}

