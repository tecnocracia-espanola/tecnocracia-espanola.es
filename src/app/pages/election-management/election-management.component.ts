import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentsModule],
  encapsulation: ViewEncapsulation.None
})
export class ElectionManagementComponent {
  url = "https://infoelectoral.interior.gob.es/es/proceso-electoral/calendario-electoral/"

  constructor(public tools: ToolsService) { }

  votingItems = [
    {
      title: '¿Qué sistema de votación queremos? ¿Cuál es el mejor modelo y método?',
      voters: 0,
      status: 'Votación Abierta',
      statusClass: 'btn-success',
      date: '15 de mayo de 2024',
      description: 'Se debatirá sobre los sistemas de votación más efectivos, incluyendo opciones como el sistema de representación proporcional y el método de elección directa.'
    },
    {
      title: '¿Cuáles son nuestros propósitos?',
      voters: 0,
      status: 'Votación Abierta',
      statusClass: 'btn-success',
      date: '10 de junio de 2024',
      description: 'Definir los objetivos a largo plazo del grupo, como mejorar la transparencia en la gestión pública y fomentar la participación ciudadana.'
    },
    {
      title: '¿Cuáles son los principales problemas que más atañen a la población?',
      voters: 350,
      status: 'Votación Cerrada',
      statusClass: 'btn-secondary',
      date: '20 de abril de 2024',
      description: 'Priorizar los problemas más urgentes, como la gestión del agua, la eficiencia energética, y el acceso a la vivienda.'
    },
    {
      title: 'Dominio de esta web',
      voters: 215,
      status: 'Votación Cerrada',
      statusClass: 'btn-secondary',
      date: '5 de marzo de 2024',
      description: 'Decidir el dominio definitivo de esta plataforma web y su posible alcance a nivel nacional.'
    },
    {
      title: 'Fuente de esta web',
      voters: 0,
      status: 'Votación Abierta',
      statusClass: 'btn-success',
      date: '25 de julio de 2024',
      description: 'Elegir las fuentes y referencias que respaldarán el contenido y las decisiones presentadas en la web.'
    },
    {
      title: 'Gestión de los recursos hídricos del país',
      voters: 0,
      status: 'Votación Abierta',
      statusClass: 'btn-success',
      date: '12 de agosto de 2024',
      description: 'Proponer medidas para mejorar la distribución y conservación del agua, asegurando la sostenibilidad de este recurso vital.'
    }
  ];


}
