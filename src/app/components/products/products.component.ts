import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FilterComponent } from '../layout/filter/filter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, FilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
