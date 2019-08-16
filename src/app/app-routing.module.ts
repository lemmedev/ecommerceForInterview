import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  // { path: 'items/:ref', component: ItemDescComponent },
  { path: 'checkout', component: CheckoutCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'items' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
