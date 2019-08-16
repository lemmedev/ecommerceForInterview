import { Component, OnInit } from '@angular/core';
import { DataService } from './components/services/data.service';
import { ItemsListItem } from './components/models/items-list-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerceApp';
  searchItem: string;
  searchedItems = [];
  results;
  outerArr = [];
  itemsList;
  isLoading;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getItemsList()
      .subscribe(itemsListC => {
        console.log('item is : component', itemsListC);
        this.itemsList = itemsListC;
        this.isLoading = false;
        for (const iterator of this.itemsList) {
          console.log('single obj', iterator);
          const obj = new ItemsListItem(iterator);
          this.searchedItems.push(obj);
        }
      });

  }
  // name content
  searchMethod() {
    console.log('itemsmss', this.searchedItems);
    this.results = this.searchedItems.filter(res => {
      for (const iterator of res.name.split(' ')) {
        if (iterator == this.searchItem) {
          return true;
        }
      }
      for (const iterator of res.content.split(' ')) {
        if (iterator == this.searchItem) {
          return true;
        }
      }
    });
    this.dataService.setSearch(this.results);
    console.log('resultsss', this.results);
  }

}
