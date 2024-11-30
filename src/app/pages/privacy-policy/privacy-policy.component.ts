import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
    imports: [CommonModule, NgbTooltipModule, ComponentsModule],

  templateUrl: './privacy-policy.component.html',
})
export class PrivacyPolicyComponent {

}
