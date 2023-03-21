import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductService} from './createProducts/products.service';
import { WriteProducts } from './generateProducts/generatePerfumes.component';

const routes: Routes = [
  {path: 'service', component:ProductService},
  {path: 'womenPerfume', component:WriteProducts},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
