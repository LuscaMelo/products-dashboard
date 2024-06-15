import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
