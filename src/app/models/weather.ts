interface weather{
  main:string,
  description:string,
  icon:string
}
interface main{
  temp:number,
  pressure:number,
  humidity:number,
}
interface wind{
  speed:number,
  deg:number,
  description:string
}
interface clouds{
  all:number
}
export interface WeatherData{
  weather:weather;
  main:main;
  wind:wind;
  clouds:clouds;
  name:string;
}

export class Fam{
  name: string;
  tel: number;
}
