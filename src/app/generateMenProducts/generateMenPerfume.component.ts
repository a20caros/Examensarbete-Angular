import { Component, OnInit } from '@angular/core';
import { MenProduct } from '../createMenProducts/menProduct.model';
import { ProductMenService } from '../createMenProducts/menProducts.service';



@Component({
    selector: 'app-createMenProducts',
    templateUrl: './generateMenPerfume.component.html',
    styleUrls: ['../generateProducts/generatePerfume.component.css']
})


export class WriteMenProducts implements OnInit {
  menProducts:MenProduct[] = [];
  constructor(private productMenService:ProductMenService){}

  ngOnInit(): void {
      this.menProducts = this.productMenService.getMenPerfumesFromLocalStorage();
  }

}