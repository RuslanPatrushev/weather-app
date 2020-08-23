import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
  }

  getTemp(temp: number, unit: string): number {
    if (unit === 'metric') {
      return (temp - 32) * 5 / 9;
    }
    if (unit === 'imperial') {
      return (temp * 9 / 5) + 32;
    }
  }

  getWindDesc(deg: number): string {
    if (deg > 315 && deg <= 45)
      return 'северный';
    if (deg > 45 && deg <= 135)
      return 'восточный';
    if (deg > 135 && deg <= 225)
      return 'южный';
    if (deg > 225 && deg <= 315)
      return 'западный';
  }
}
