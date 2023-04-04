import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class ProductService {  
      getPerfumesFromLocalStorage(): any[] {
        const jsonPerfumes = localStorage.getItem('producttttttt') ?? '[]';
        return JSON.parse(jsonPerfumes);
      }
}