import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecentSearchService {
  public searchList:any=[]
  public weatherListInSearch = new BehaviorSubject<any>([]);

  constructor() { }
  
  getSearchList(){
    return this.weatherListInSearch.asObservable();
 }

  addToSearch(list:any){
    this.searchList.push(list);
    this.weatherListInSearch.next(this.searchList);
  }

  removeAllSearch(){
    this.searchList=[]
    this.weatherListInSearch.next(this.searchList);
  }
}
