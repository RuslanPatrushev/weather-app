import {Component, OnInit} from '@angular/core';
import {ApiWeatherService} from "../../services/api-weather.service";
import {WeatherData} from "../../models/weather";
import {WeatherService} from "../../services/weather.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SearchModalComponent} from "../search-modal/search-modal.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string = 'Омск';
  weatherData: WeatherData;
  selectedUnit: string = 'metric';
  errorCity = false;

  constructor(
    private apiWeatherService: ApiWeatherService,
    private weatherService: WeatherService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.getWeatherByName();
  }

  getWeatherByName() {
    this.apiWeatherService.getWeatherByName(this.city).subscribe(data => {
      this.weatherData = data;
      this.weatherData.wind.description = this.weatherService.getWindDesc(this.weatherData.wind.deg);
    });
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(loc => {
      this.apiWeatherService.getWeatherByCoords(loc.coords.latitude, loc.coords.longitude).subscribe((data: WeatherData) => {
        this.errorCity = false;
        this.weatherData = data;
        if (this.selectedUnit === 'imperial') {
          this.weatherData.main.temp = this.weatherService.getTemp(this.weatherData.main.temp, this.selectedUnit)
        }
        this.weatherData.wind.description = this.weatherService.getWindDesc(this.weatherData.wind.deg);
        this.city = this.weatherData.name;
      })
    })
  }

  public onUnitChange(unit: string) {
    if (this.selectedUnit != unit) {
      this.selectedUnit = unit;
      this.weatherData.main.temp = this.weatherService.getTemp(this.weatherData.main.temp, this.selectedUnit);
    }
  }


  openModal() {
    const modalRef = this.modalService.open(SearchModalComponent, {centered: true});
    modalRef.result.then((result: string) => {
      if (result) {
        this.city = result;
        this.apiWeatherService.getWeatherByName(result).subscribe((data: WeatherData) => {
          this.errorCity = false;
          this.weatherData = data;
          if (this.selectedUnit === 'imperial') {
            this.weatherData.main.temp = this.weatherService.getTemp(this.weatherData.main.temp, this.selectedUnit);
          }
          this.weatherData.wind.description = this.weatherService.getWindDesc(this.weatherData.wind.deg);
        }, (error) => {
          this.errorCity = true;
        })
      }
    }).catch(() => {
    });
  }
}
