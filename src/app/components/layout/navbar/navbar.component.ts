import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() setMenuOpen = new EventEmitter();

  openMenu() {
    this.setMenuOpen.emit()
  }

}
