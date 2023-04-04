import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductMenService {
    
      getMenPerfumesFromLocalStorage(): any[] {
        const jsonMenPerfumes = localStorage.getItem('menProductssss') ?? '[]';
        return JSON.parse(jsonMenPerfumes);
      }
}