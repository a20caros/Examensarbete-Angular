import { Component } from '@angular/core';

@Component({
    selector: 'app-createProducts',
    template: ``
    
})

export class createProducts{
    constructor() { }
    private getProductName(): string {
        let productHeading = ' ';
        const character = 'ABCDEFGHIJKLMNOPRSTUV';
        for (let i = 0; i < 6; i++) {
          productHeading += character.charAt(Math.floor(Math.random() * character.length));
        }
        return productHeading;
    }
    private getproductPrice(): number {
        const maxPrice = 1000;
        const minPrice = 100;
        const productPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return productPrice;
    }
    private getProductSize(): number {
        const maxSize = 3;
        const minSize = 10;
        const productSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return productSize;
    }
    private getProductSmell(): string{
        const smellArray =['vanilj','rosor','citrusfrukter','mandel','päron','äpple'];
        const productSmell = smellArray[(Math.random() * smellArray.length) | 0]
        return 'Doft av ' + productSmell;
    }
    private getProdutImg(): string{
        const productImgArray = ['pexels-daria-liudnaya-8166972.jpg','pexels-daria-liudnaya-8166566.jpg', 'pexels-karolina-grabowska-8361478.jpg', 'pexels-karolina-grabowska-8361487.jpg','pexels-daria-liudnaya-8166972.jpg', 'pexels-hanna-auramenka-8553210.jpg',  'pexels-dids-1190829.jpg', 'pexels-daria-liudnaya-8166613.jpg'];
        const productImg = productImgArray[(Math.random()*productImgArray.length) | 0];
        return productImg;
    }
    private generateProductId(): string {
        const time = Date.now().toString(36); 
        const randomCharacters = Math.random().toString(36).substring(2, 8); 
        return time + "-" + randomCharacters;
    }
    generatePerfumes(): any[] {
        const productArray = [];
        for (let i = 0; i < 10; i++) {
            const PRODUCT = {
                name: this.getProductName(),
                price: this.getproductPrice(),
                size: this.getProductSize(),
                smell: this.getProductSmell(),
                img: this.getProdutImg(),
                id: this.generateProductId()
            };
            productArray.push(PRODUCT);
            
        }
        return productArray;
    }
    

}