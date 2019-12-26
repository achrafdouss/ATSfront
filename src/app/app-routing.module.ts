import { NgModule } from '@angular/core';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
const routes: Routes = [
  {path: 'liste', component: ProductListComponent},
  {path: 'details/:id', component: ProductDetailComponent},
  {path: '**' , component: ProductListComponent , pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
