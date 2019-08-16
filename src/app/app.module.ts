import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { DataService } from './components/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsListItemComponent } from './components/items-list-item/items-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ItemListComponent,
    CheckoutCartComponent,
    ItemsListItemComponent,
    WishlistComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
