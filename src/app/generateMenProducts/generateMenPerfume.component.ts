import { Component, OnInit } from '@angular/core';
import { MenProduct } from '../createMenProducts/menProduct.model';
import { ProductMenService } from '../createMenProducts/menProducts.service';
import { map } from 'rxjs/operators';



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
    this.productMenService.getProducts().pipe(
        map((data: any) => {
          return data.map((item: any) => {
            const product: MenProduct = {
              id: item.id,
              name: item.name,
              price: item.price,
              size: item.size,
              smell: item.smell,
              img: item.img,
            }
            return product;
          });
          
        })
        ).subscribe((menProducts: MenProduct[]) => {
            this.menProducts = menProducts;
            this.productMenService.saveData('myMenProducts', menProducts);
    });
   
  }

}