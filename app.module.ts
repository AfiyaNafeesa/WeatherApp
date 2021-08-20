import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './components/weather-component/weather-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';

const appRoutes: Routes= [
  {path: '', component: WeatherComponentComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'recentSearch', component: RecentSearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    FavouriteComponent,
    RecentSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
