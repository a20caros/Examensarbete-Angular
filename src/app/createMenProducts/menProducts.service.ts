import { Injectable } from "@angular/core";
import { MenProduct } from "./menProduct.model";

@Injectable({
    providedIn: 'root'
})

export class ProductMenService {
    private getMenProductName(): string {
        let productMenHeading = ' ';
        const character = 'ABCDEFGHIJKLMNOPRSTUV';
        for (let i = 0; i < 6; i++) {
            productMenHeading += character.charAt(Math.floor(Math.random() * character.length));
        }
        return productMenHeading;
    }
    private getMenProductPrice(): number {
        const maxPrice = 1000;
        const minPrice = 100;
        const menProductPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return menProductPrice;
    }
    private getMenProductSize(): number {
        const maxSize = 3;
        const minSize = 10;
        const menProductSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return menProductSize;
    }
    private getMenProductSmell(): string{
        const menSmellArray =['kastanj','lavensel','mynta','salvia','ceder','violblad'];
        const menProductSmell = menSmellArray[(Math.random() * menSmellArray.length) | 0]
        return 'Doft av ' + menProductSmell;
    }
    private getMenProdutImg(): string{
        const menProductImgArray = ['assets/images/pexels-darina-belonogova-8789599.jpg','assets/images/pexels-rfstudio-3059609.jpg', 'assets/images/pexels-dina-nasyrova-3831748.jpg','assets/images/pexels-jonathan-cooper-15190739.jpg',  'assets/images/pexels-yogesh-jangid-7702669.jpg'];
        const menProductImg = menProductImgArray[(Math.random()*menProductImgArray.length) | 0];
        return menProductImg;
    }
    private generateMenProductId(): string {
        const time = Date.now().toString(36); 
        const randomCharacters = Math.random().toString(36).substring(2, 8); 
        return time + "-" + randomCharacters;
    }
    generateMenPerfumes(): MenProduct[] {
        const menProductArray: MenProduct[] = [];
        for (let i = 0; i < 10; i++) {
            const PRODUCT: MenProduct = {
                name: this.getMenProductName(),
                price: this.getMenProductPrice(),
                size: this.getMenProductSize(),
                smell: this.getMenProductSmell(),
                img: this.getMenProdutImg(),
                id: this.generateMenProductId()
            };
            menProductArray.push(PRODUCT);
            
        }
        return menProductArray;
    }
   
    saveMenPerfumesToLocalStorage(): void {
        const menProducts = this.generateMenPerfumes();
        const jsonMenPerfumes = JSON.stringify(menProducts);
        localStorage.setItem('menProducts', jsonMenPerfumes);
      }
    
      getMenPerfumesFromLocalStorage(): any[] {
        const jsonMenPerfumes = localStorage.getItem('menProducts') ?? '[]';
        return JSON.parse(jsonMenPerfumes);
      }
}