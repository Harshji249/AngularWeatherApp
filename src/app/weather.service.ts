import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private myData: string;
  finalData: any;

  setData(data: any): void {
    this.myData = data;
  }

  getData(): any {
    return this.myData;
  }
  constructor() {}

  getWeather(city: string) {
    console.log(city);
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94f2ec1e8727d134bc8aaa84e94e0165&units=metric`
    );
  }
}
