import { Component, Input } from '@angular/core';

@Component({
  selector: 'basic-card',  
  templateUrl: './basic-card.component.html',
})
export class BasicCardComponent {
  @Input() imageUrl?: string; 
  @Input() title: string = 'Card Title'; 
}