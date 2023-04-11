import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { WriteProducts } from './generateProducts/generatePerfumes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { Perfumes } from './generateProducts/perfumes.component';
import { CartComponent } from './cart/cart.component';
import { MenPerfumes } from './generateMenProducts/menPerfume.component';
import { WriteMenProducts } from './generateMenProducts/generateMenPerfume.component';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './homePage/homePage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WriteProducts,
    Perfumes,
    CartComponent,
    MenPerfumes,
    WriteMenProducts,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
