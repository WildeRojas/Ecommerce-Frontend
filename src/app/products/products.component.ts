import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ProductServiceService } from './Product-Service/product-service.service';
import { Router } from '@angular/router';
import { Product } from './Product-Service/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isloading: boolean = true;

  constructor(
    private apiService: ApiService,
    private productservice: ProductServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isloading = true;
    this.apiService.getProductos().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.isloading = false;
      },
      error: (error) => {
        console.error('Error al Obtener los Productos',error);
        this.isloading=false;
      }
    })
  }

  onViewDetail(product: Product): void {
    this.productservice.setSelectedProduct(product);
    this.router.navigate(['/product-detail',product.id]);
  }
}
