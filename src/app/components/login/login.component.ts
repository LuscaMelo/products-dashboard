import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username!: string;
  password!: string;

  router = inject(Router)

  login() {
    if (this.username == "l5networks" && this.password == "l5networks") {
      this.router.navigate(['products'])
    } else {
      alert('Incorrect username or password')
    }
  }

}
