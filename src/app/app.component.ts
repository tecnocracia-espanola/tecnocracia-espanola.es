import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule] 
})
export class AppComponent {
  title = 'Tecnocracia Española';
  angularVersion = VERSION.full;
  currentDate = new Date();
}
