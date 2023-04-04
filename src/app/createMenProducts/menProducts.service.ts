import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductMenService {
    //Get the men products from localstorage
      getMenPerfumesFromLocalStorage(): any[] {
        const jsonMenPerfumes = localStorage.getItem('menProductssss') ?? '[]';
        return JSON.parse(jsonMenPerfumes);
      }
}