import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductService} from './createProducts/products.service';
import { WriteProducts } from './generateProducts/generatePerfumes.component';

const routes: Routes = [
  {path: 'service', component:ProductService},
  {path: 'womenPerfume', component:WriteProducts},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
