// app.component.ts
import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule], 
})
export class AppComponent {
  title = 'Tecnocracia Española';
  angularVersion = VERSION.full;
  currentDate = new Date();
}
