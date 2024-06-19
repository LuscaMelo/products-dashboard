import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})

export class ProductDetailComponent {
  product!: Product
  isHidde: boolean = false

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.getProduct()
  }

  ngOnInit(): void {
    this.isHidde = true
  }

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.productService.getProductItem(id).subscribe((product => this.product = product))
  }

  setOpen(event: boolean) {
    this.isHidde = !this.isHidde
  }
}
