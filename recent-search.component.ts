import { Component, OnInit } from '@angular/core';
import { RecentSearchService } from '../recent-search.service';


@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  public weatherSearch:any=[];

  constructor(private recentSearchService : RecentSearchService) { }

  ngOnInit(): void {
    this.recentSearchService.getSearchList()
    .subscribe(res=>{
      this.weatherSearch=res;
    })
  }

  removeAll(){
    this.recentSearchService.removeAllSearch();
  }

}


 


