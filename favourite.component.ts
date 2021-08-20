import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public weatherInfo:any=[];
  public total:number=0;

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit(): void {
    this.favouriteService.getList()
    .subscribe(res=>{
      this.weatherInfo=res;
      this.total=res.length;
    })
  }

  removeItem(item){
    this.favouriteService.removeFromFav(item);
  }

  removeAll(){
    this.favouriteService.removeAllFav();
  }

}
