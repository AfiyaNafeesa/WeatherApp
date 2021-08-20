import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  public favList:any=[]
  public weatherList = new BehaviorSubject<any>([]);

  constructor() { }
  
  getList(){
    return this.weatherList.asObservable();
 }

  addToFav(list:any){
    this.favList.push(list);
    this.weatherList.next(this.favList);
  }

  removeFromFav(list){
    this.favList.map((data:any,index)=>{
      if(list.id === data.id){
        this.favList.splice(index,1);
      }
    })
    this.weatherList.next(this.favList);
  }

  removeAllFav(){
    this.favList=[]
    this.weatherList.next(this.favList);
  }
}
