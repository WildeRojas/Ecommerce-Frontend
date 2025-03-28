import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Product-Service/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product-Service/product-service.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productDetail: Product | null = null;
  isloading: boolean = true;
  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    this.productService.selectedProduct$.subscribe(product => {
      if (product && product.id === Number(productId)) {
        this.productDetail = product;
        this.isloading = false;
      } else if (productId) {
        this.loadProductFromApi(Number(productId));
      }
    })
  }

  loadProductFromApi(id: number): void {
    this.apiService.getProductoById(id).subscribe({
      next: (product: Product) => {
        this.productDetail = product;
        this.isloading = false;
      },
      error: (error) => {
        console.error('Error al obtener el producto', error);
        this.isloading = false;
      }
    });
  }
}
