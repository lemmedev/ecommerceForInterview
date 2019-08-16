import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ItemsListItem } from '../models/items-list-items';


@Injectable()
export class DataService {
  mainList = [];
  searchList;
  constructor(private http: HttpClient) { }
  URL = 'https://raw.githubusercontent.com/lemmedev/ecommerceApp/master/product.json';
  getItemsList() {
    return this.http.get<ItemsListItem>(this.URL)
    .pipe(catchError(err => throwError('Something went wrong')));
  }
  setMain(list) {
    this.mainList = list;
  }

  getMain() {
    return this.mainList;
  }

  setSearch(list) {
    this.searchList = list;
  }

  getSearch() {
    return this.searchList;
  }




}
