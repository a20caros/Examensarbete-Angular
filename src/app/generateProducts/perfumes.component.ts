import { Component, Input } from '@angular/core';
import { Product } from '../createProducts/product.model';


@Component({
    selector: 'app-perfumes',
    templateUrl: './perfumes.component.html',
    styleUrls: ['./generatePerfume.component.css']
})


export class Perfumes{
    @Input() product!: Product;
}