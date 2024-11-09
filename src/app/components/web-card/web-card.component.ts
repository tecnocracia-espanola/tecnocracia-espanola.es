import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-card',
  templateUrl: './web-card.component.html',
  styleUrls: ['./web-card.component.css']
})
export class WebCardComponent {
  @Input() label = '';
  @Input() simpleCard = true;
  @Input() bodyBorder = '1px solid #f7f7f7';
  @Input() cardShadow = true;
  @Input() showLabel = false;
  @Input() isChevronVisible = true;
  @Input() isContentVisible = true;
  @Input() cardBodyClass = '';
  @Input() cardClass = '';

  getStyle() {
    let style = '';
    if (this.cardShadow) {
      style += 'box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.05);';
    }
    return style;
  }
  getBodyStyle() {
    let style = '';
    if (this.bodyBorder) {
      style += `border: ${this.bodyBorder};`;
    }
    style += 'max-height: 75vh; overflow-y: auto; padding: 16px;';
    return style;
  }

  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }
}
