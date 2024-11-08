import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ExamplesComponent {
  // Component logic here
}
