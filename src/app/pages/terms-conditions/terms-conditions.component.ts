import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
    imports: [CommonModule, NgbTooltipModule, ComponentsModule],

  templateUrl: './terms-conditions.component.html',
})
export class TermsConditionsComponent {

}
