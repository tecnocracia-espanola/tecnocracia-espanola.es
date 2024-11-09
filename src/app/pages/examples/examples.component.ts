import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ComponentsModule],
})
export class ExamplesComponent {
  // Component logic here
}
