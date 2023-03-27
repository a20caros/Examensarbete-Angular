import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { WriteProducts } from './generateProducts/generatePerfumes.component';
import { WriteMenProducts } from './generateMenProducts/generateMenPerfume.component';
import { ImagesInformationComponent } from './imagesInformation/imagesInformation.component';
import { HomePageComponent } from './homePage/homePage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homePage'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'womenPerfume', component:WriteProducts},
  {path: 'cart', component:CartComponent},
  {path: 'MenPerfumes', component:WriteMenProducts},
  {path: 'ImagesInformationComponent', component:ImagesInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
