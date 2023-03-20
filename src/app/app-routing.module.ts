import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { createProducts } from './createProducts/products.component';
import { WomenPerfumeComponent } from './womenPerfyme/showWomenPerfyme.component';

const routes: Routes = [
  {path: "womenPerfume", component:WomenPerfumeComponent},
  {path: "products", component:createProducts}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
