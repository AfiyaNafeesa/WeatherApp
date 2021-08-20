import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  url='https://api.openweathermap.org/data/2.5/weather';
  apikey='f827383fe77ae0d26b12b14e262d193d';

  constructor(private http: HttpClient) { }


getWeatherByLatLon(lat:number,lon:number){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units', 'metric')
  .set('appid', this.apikey)
  return this.http.get(this.url, {params});
}

getWeatherByCity(city:string){
  let params = new HttpParams()
  .set('q',city)
  .set('units', 'metric')
  .set('appid', this.apikey)
  return this.http.get(this.url, {params});
}
}

