import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherData} from "../models/weather";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  readonly ROOT_URL: string = 'http://api.openweathermap.org/data/2.5/weather';
  readonly APPID: string = '4457479fb3296520303975b26b3ab373';
  readonly lang: string = 'ru';
  readonly units: string = 'metric';

  constructor(private http: HttpClient) {
  }

  private initParams(): HttpParams {
    let params = new HttpParams();
    params = params.set('lang', this.lang);
    params = params.set('APPID', this.APPID);
    params = params.set('units', this.units);
    return params;
  }

  getWeatherByName(city: string): Observable<WeatherData> {
    let params = this.initParams();
    params = params.set('q', city);
    return this.http.get<WeatherData>(this.ROOT_URL, {params: params});
  }

  getWeatherByCoords(latitude: number, longitude: number): Observable<WeatherData> {
    let params = this.initParams();
    params = params.set('lat', latitude.toString());
    params = params.set('lon', longitude.toString());
    return this.http.get<WeatherData>(this.ROOT_URL, {params: params});
  }
}
