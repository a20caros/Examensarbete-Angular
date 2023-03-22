import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WriteProducts } from './generateProducts/generatePerfumes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { Perfumes } from './generateProducts/perfumes.component';
import { CartComponent } from './cart/cart.component';
import { MenPerfumes } from './generateMenProducts/menPerfume.component';
import { WriteMenProducts } from './generateMenProducts/generateMenPerfume.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WriteProducts,
    Perfumes,
    CartComponent,
    MenPerfumes,
    WriteMenProducts,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
