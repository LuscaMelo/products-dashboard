import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
