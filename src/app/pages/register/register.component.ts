import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [CommonModule, NgbTooltipModule, ComponentsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.email, this.password).subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        this.message = error.error || 'Registration failed.';
      }
    );
  }
}