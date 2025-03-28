import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  id: number;
  title: string;
  image:string;
  price: number;
  description?: string;
}


@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  private productSource = new BehaviorSubject<Product | null>(null);
  public selectedProduct$ = this.productSource.asObservable();

  constructor() { }

  setSelectedProduct(product: Product): void {
    this.productSource.next(product);
  }

  clearSelectedProduct(product: Product): void {
    this.productSource.next(null);
  }

  changeProduct(product: any): void {
    this.productSource.next(product);
  }
}
