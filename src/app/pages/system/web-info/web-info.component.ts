import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-web-info',
  templateUrl: './web-info.component.html',
  standalone: true,
  imports: [ComponentsModule]
})
export class WebInfoComponent {
}
