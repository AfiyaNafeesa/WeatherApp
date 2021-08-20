import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteService } from 'src/app/favourite.service';
import { RecentSearchService } from 'src/app/recent-search.service';
import { WeatherServiceService } from 'src/app/weather-service.service';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {
  lat;
  lon;
  weatherData;
  
  constructor(private weatherService : WeatherServiceService,  private favouriteService : FavouriteService, private recentSearchService : RecentSearchService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;

        this.weatherService.getWeatherByLatLon(this.lat,this.lon).subscribe(data=>{
          this.weatherData=data;
        })
      })
    }
  }

  getCity(city:string){
    this.weatherService.getWeatherByCity(city).subscribe(data=>{
      this.weatherData = data;
      this.recentSearchService.addToSearch(this.weatherData);
    })
  }

  addToFavList(list:any){
    this.favouriteService.addToFav(list);
  }

}
