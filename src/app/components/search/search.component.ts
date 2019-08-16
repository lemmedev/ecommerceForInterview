import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedItems;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.searchedItems = this.dataService.getSearch();
    console.log('hihihih', this.searchedItems);
  }

}
