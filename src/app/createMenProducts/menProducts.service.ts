import { Injectable } from "@angular/core";
import { MenProduct } from "./menProduct.model";

@Injectable({
    providedIn: 'root'
})

export class ProductMenService {
    //Generates a random name of a perfume for men
    /*private getMenProductName(): string {
        //The name is created by randomly taking 6 letters through a for loop and assigning it to the variable productmenheading
        let productMenHeading = ' ';
        const character = 'ABCDEFGHIJKLMNOPRSTUV';
        for (let i = 0; i < 6; i++) {
            productMenHeading += character.charAt(Math.floor(Math.random() * character.length));
        }
        return productMenHeading;
    }
     //Generates a random price of a perfume for men
    private getMenProductPrice(): number {
        //Two constants that set the maximum and mine value for the price
        const maxPrice = 1000;
        const minPrice = 100;
        //Through math.random a number is randomized between 1 and 0 and then multiplied by the difference at max and minimum price and minimum price is then added on
        const menProductPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return menProductPrice;
    }
     //Generates a random product size of a perfume for men
    private getMenProductSize(): number {
        //Two constants that set the maximum and mine value for the size
        const maxSize = 3;
        const minSize = 10;
        //Through math.random a number is randomized between 1 and 0 and then multiplied by the difference at max and minimum size and minimum size is then added on
        const menProductSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return menProductSize;
    }
     //Generates a random product smell of a perfume for men
    private getMenProductSmell(): string{
        //an array containing a number of different scents
        const menSmellArray =['kastanj','lavensel','mynta','salvia','ceder','violblad'];
        //Generates a random index to choose a scent from "Mensmellarray" by using the "Math.Rrandom" feature to generate a random figure between 0 and the length of "Mensmellarray".
        const menProductSmell = menSmellArray[(Math.random() * menSmellArray.length) | 0]
        return 'Doft av ' + menProductSmell;
    }
     //Generates a random product images of a perfume for men
    private getMenProdutImg(): string{
        //an array containing a number of different product images
        const menProductImgArray = ['assets/images/pexels-darina-belonogova-8789599.jpg','assets/images/pexels-rfstudio-3059609.jpg', 'assets/images/pexels-dina-nasyrova-3831748.jpg','assets/images/pexels-jonathan-cooper-15190739.jpg',  'assets/images/pexels-yogesh-jangid-7702669.jpg'];
        //Generates a random index to choose a images from "menProductImgArray" by using the "Math.Rrandom" feature to generate a random figure between 0 and the length of "menProductImgArray".
        const menProductImg = menProductImgArray[(Math.random()*menProductImgArray.length) | 0];
        return menProductImg;
    }
     //Generates a random id of a perfume for men
    private generateMenProductId(): string {
        //The method starts by defining a constant "time" that stores the time in milliseconds and then converts this time into a string using the method "Tostring (36)".
        const time = Date.now().toString(36); 
        //The generated string "substring (2.8)" is used to pick out the six characters from the second position in the string onwards.
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
      }*/
    
      getMenPerfumesFromLocalStorage(): any[] {
        const jsonMenPerfumes = localStorage.getItem('menProducts') ?? '[]';
        return JSON.parse(jsonMenPerfumes);
      }
}