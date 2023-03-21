import { Component, OnInit } from '@angular/core';
import { Product } from '../createProducts/product.model';
import { ProductService } from '../createProducts/products.service';



@Component({
    selector: 'app-createProducts',
    templateUrl: './generatePerfumes.component.html',
    styleUrls: ['./generatePerfume.component.css']
})


export class WriteProducts implements OnInit {
  products:Product[] = [];
  constructor(private productService:ProductService ){}

  ngOnInit(): void {
      this.products = this.productService.generatePerfumes();
  }

}