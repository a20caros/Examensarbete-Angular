import { Component, OnInit } from '@angular/core';
import { MenProduct } from '../createMenProducts/menProduct.model';
import { ProductMenService } from '../createMenProducts/menProducts.service';



@Component({
    selector: 'app-createMenProducts',
    templateUrl: './generateMenPerfume.component.html',
    styleUrls: ['../generateProducts/generatePerfume.component.css']
})


export class WriteMenProducts implements OnInit {
  //fetching a list of products for men
  menProducts:MenProduct[] = [];
  constructor(private productMenService:ProductMenService){}
  //Called when the component is initialized and used to retrieve the products to assign to the menProducts array
  ngOnInit(): void {
      this.menProducts = this.productMenService.getMenPerfumesFromLocalStorage();
  }

}