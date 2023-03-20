import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenPerfumeComponent } from './womenPerfyme/showWomenPerfyme.component';

const routes: Routes = [
  {path: "womenPerfume", component:WomenPerfumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
