import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-political-studies',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, ComponentsModule],
  templateUrl: './political-studies.component.html'
})
export class PoliticalStudiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  constitutionSections = [
    {
      title: "Preámbulo",
      content: `La Nación española, deseando establecer la justicia, la libertad y la seguridad y promover el bien de cuantos la integran, en uso de su soberanía, proclama su voluntad de garantizar la convivencia democrática, consolidar un Estado de Derecho, proteger a todos los españoles y pueblos de España, promover el progreso cultural y económico, y colaborar en el fortalecimiento de relaciones pacíficas internacionales.`,
      quote: `"Garantizar la convivencia democrática dentro de la Constitución y de las leyes conforme a un orden económico y social justo..."`,
      page: "Página 3"
    },
    {
      title: "Título Preliminar",
      content: `Define a España como un Estado social y democrático de Derecho, con la soberanía nacional residiendo en el pueblo español. Destaca la forma de gobierno como Monarquía parlamentaria y la unidad de la Nación, reconociendo la autonomía de las nacionalidades y regiones.`,
      quote: `"España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores... la libertad, la justicia, la igualdad y el pluralismo político."`,
      page: "Página 3"
    },
    {
      title: "Título I - Derechos y Deberes Fundamentales",
      content: `Detalla los derechos fundamentales, como la igualdad ante la ley, la protección de la intimidad, y la libertad de expresión. Se incluyen derechos como el derecho a la educación y el de acceso a la cultura, así como garantías para proteger estos derechos.`,
      quote: `"Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social."`,
      page: "Páginas 4-12"
    },
    {
      title: "Título II - De la Corona",
      content: `Regula las funciones del Rey como Jefe del Estado, incluyendo la sanción de leyes, el mando supremo de las Fuerzas Armadas, y la representación internacional. También detalla el proceso de sucesión y las condiciones de la regencia.`,
      quote: `"El Rey es el Jefe del Estado, símbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones..."`,
      page: "Páginas 12-14"
    },
    {
      title: "Título III - De las Cortes Generales",
      content: `Describe la estructura bicameral de las Cortes Generales, que comprenden el Congreso de los Diputados y el Senado. Explica sus funciones legislativas, de control del Gobierno, y de aprobación de presupuestos.`,
      quote: `"Las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados y el Senado..."`,
      page: "Páginas 14-19"
    },
    {
      title: "Título IV - Del Gobierno y de la Administración",
      content: `Describe la función ejecutiva del Gobierno, dirigido por el Presidente. Se detalla la responsabilidad del Gobierno en la política interior y exterior y la administración de los asuntos civiles y militares.`,
      quote: `"El Gobierno dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado..."`,
      page: "Páginas 20-22"
    },
    {
      title: "Título V - Relaciones entre el Gobierno y las Cortes Generales",
      content: `Expone la relación entre el Gobierno y las Cortes Generales, incluyendo mecanismos de control como la cuestión de confianza y la moción de censura. Se enfatiza la responsabilidad del Gobierno ante el Congreso.`,
      quote: `"El Gobierno responde solidariamente en su gestión política ante el Congreso de los Diputados..."`,
      page: "Páginas 22-24"
    },
    {
      title: "Título VI - Del Poder Judicial",
      content: `Explica la independencia del Poder Judicial y su papel en garantizar el cumplimiento de la ley. Se detallan las funciones de los jueces y tribunales y las garantías para la imparcialidad.`,
      quote: `"La justicia emana del pueblo y se administra en nombre del Rey por Jueces y Magistrados independientes..."`,
      page: "Página 24"
    },
    {
      title: "Título VII - Economía y Hacienda",
      content: `Define principios económicos y el sistema tributario, destacando la progresividad y la equidad en la distribución de los recursos públicos. Se enfatiza la eficiencia del gasto público.`,
      quote: `"Todos contribuirán al sostenimiento de los gastos públicos de acuerdo con su capacidad económica..."`,
      page: "Página 25"
    }
  ];

  
}
