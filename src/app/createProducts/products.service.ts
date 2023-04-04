import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class ProductService {  
    //Get the women products from localstorage
      getPerfumesFromLocalStorage(): any[] {
        const jsonPerfumes = localStorage.getItem('producttttttt') ?? '[]';
        return JSON.parse(jsonPerfumes);
      }
}