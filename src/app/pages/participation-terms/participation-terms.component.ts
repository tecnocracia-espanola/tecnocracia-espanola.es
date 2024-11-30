import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-participation-terms',
  standalone: true,
    imports: [CommonModule, NgbTooltipModule, ComponentsModule],

  templateUrl: './participation-terms.component.html',
})
export class ParticipationTermsComponent {

}
