import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WriteProducts } from './generateProducts/generatePerfumes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { Perfumes } from './generateProducts/perfumes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WriteProducts,
    Perfumes,
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
