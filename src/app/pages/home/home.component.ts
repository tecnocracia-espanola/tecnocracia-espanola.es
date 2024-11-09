// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, ComponentsModule],
})
export class HomeComponent {
  portalInfo = "EMPTY"
  expliacionEsquemaPonzi = 'Un esquema Ponzi es un tipo de estafa de inversión que promete altos rendimientos a los primeros inversores con el dinero de los nuevos participantes.'
  expliacionASIREM = 'ASIREM es una red de protección forestal y rural en Tenerife, surgida tras incendios masivos, organizada por la comunidad local. (Click para abrir su instagram)'
}
