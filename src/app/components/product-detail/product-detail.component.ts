import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})

export class ProductDetailComponent {
  product!: Product

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.getProduct()
  }

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.productService.getProductItem(id).subscribe((product => this.product = product))
  }
}
