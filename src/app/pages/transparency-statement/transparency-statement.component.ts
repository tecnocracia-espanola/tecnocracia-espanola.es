import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-transparency-statement',
  standalone: true,
    imports: [CommonModule, NgbTooltipModule, ComponentsModule],

  templateUrl: './transparency-statement.component.html',
})
export class TransparencyStatementComponent {

}
