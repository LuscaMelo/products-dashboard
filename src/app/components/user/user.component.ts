import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FilterComponent } from '../layout/filter/filter.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavbarComponent, FilterComponent, CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  isHidde: boolean = false

  ngOnInit(): void {
    this.isHidde = true
  }

  setOpen(event: boolean) {
    this.isHidde = !this.isHidde
  }

}
