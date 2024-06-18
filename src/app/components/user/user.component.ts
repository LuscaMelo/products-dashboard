import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
