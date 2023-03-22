import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductMenService} from './createMenProducts/menProducts.service';
import { WriteProducts } from './generateProducts/generatePerfumes.component';
import { WriteMenProducts } from './generateMenProducts/generateMenPerfume.component';

const routes: Routes = [
  {path: 'service', component:ProductMenService},
  {path: 'womenPerfume', component:WriteProducts},
  {path: 'cart', component:CartComponent},
  {path: 'MenPerfumes', component:WriteMenProducts},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
