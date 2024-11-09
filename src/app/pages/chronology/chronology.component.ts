import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// import ApexCharts from 'apexcharts';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, ComponentsModule],
})
export class ChronologyComponent implements AfterViewInit {
  @ViewChild('chart', { static: false }) chartElement!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // this.renderChart();
  }

  // renderChart(): void {
  //   const options = {
  //     series: [
  //       {
  //         name: 'Bob',
  //         data: [
  //           {
  //             x: 'Design',
  //             y: [
  //               new Date('2019-03-05').getTime(),
  //               new Date('2019-03-08').getTime(),
  //             ],
  //           },
  //           // ... rest of your data
  //         ],
  //       },
  //       // ... rest of your series
  //     ],
  //     chart: {
  //       height: 450,
  //       type: 'rangeBar',
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true,
  //         barHeight: '80%',
  //       },
  //     },
  //     xaxis: {
  //       type: 'datetime',
  //     },
  //     stroke: {
  //       width: 1,
  //     },
  //     fill: {
  //       type: 'solid',
  //       opacity: 0.6,
  //     },
  //     legend: {
  //       position: 'top',
  //       horizontalAlign: 'left',
  //     },
  //   };

  //   const chart = new ApexCharts(this.chartElement.nativeElement, options);
  //   chart.render();
  // }

  // renderChart(): void {
  //   const options = {
  //     series: [
  //       {
  //         name: 'Preparación',
  //         data: [
  //           {
  //             x: 'Avisos Meteorológicos',
  //             y: [
  //               new Date('2024-11-01').getTime(),
  //               new Date('2024-11-02').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Activación de Planes de Emergencia',
  //             y: [
  //               new Date('2024-11-02').getTime(),
  //               new Date('2024-11-03').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Alertas a la Población',
  //             y: [
  //               new Date('2024-11-02').getTime(),
  //               new Date('2024-11-03').getTime(),
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         name: 'Evento',
  //         data: [
  //           {
  //             x: 'Lluvias Torrenciales',
  //             y: [
  //               new Date('2024-11-03').getTime(),
  //               new Date('2024-11-05').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Inundaciones',
  //             y: [
  //               new Date('2024-11-04').getTime(),
  //               new Date('2024-11-06').getTime(),
  //             ],
  //             // If 'goals' is causing issues, consider removing it
  //             // or ensure it's correctly formatted
  //             // goals: [
  //             //   {
  //             //     name: 'Pico de Inundación',
  //             //     value: new Date('2024-11-05').getTime(),
  //             //     strokeColor: '#CD2F2A',
  //             //   },
  //             // ],
  //           },
  //           {
  //             x: 'Deslizamientos de Tierra',
  //             y: [
  //               new Date('2024-11-05').getTime(),
  //               new Date('2024-11-06').getTime(),
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         name: 'Respuesta',
  //         data: [
  //           {
  //             x: 'Operaciones de Rescate',
  //             y: [
  //               new Date('2024-11-05').getTime(),
  //               new Date('2024-11-07').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Evacuaciones',
  //             y: [
  //               new Date('2024-11-04').getTime(),
  //               new Date('2024-11-06').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Alojamiento Temporal',
  //             y: [
  //               new Date('2024-11-06').getTime(),
  //               new Date('2024-11-10').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Restablecimiento de Servicios Básicos',
  //             y: [
  //               new Date('2024-11-07').getTime(),
  //               new Date('2024-11-12').getTime(),
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         name: 'Recuperación',
  //         data: [
  //           {
  //             x: 'Evaluación de Daños',
  //             y: [
  //               new Date('2024-11-08').getTime(),
  //               new Date('2024-11-15').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Reparación de Infraestructuras',
  //             y: [
  //               new Date('2024-11-10').getTime(),
  //               new Date('2024-12-15').getTime(),
  //             ],
  //           },
  //           {
  //             x: 'Asistencia Financiera',
  //             y: [
  //               new Date('2024-11-12').getTime(),
  //               new Date('2024-12-30').getTime(),
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //     chart: {
  //       height: 450,
  //       type: 'rangeBar',
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true,
  //         barHeight: '80%',
  //       },
  //     },
  //     xaxis: {
  //       type: 'datetime',
  //     },
  //     stroke: {
  //       width: 1,
  //     },
  //     fill: {
  //       type: 'solid',
  //       opacity: 0.6,
  //     },
  //     legend: {
  //       position: 'top',
  //       horizontalAlign: 'left',
  //     },
  //   };
  
  //   // Check if chartElement is available
  //   if (!this.chartElement || !this.chartElement.nativeElement) {
  //     console.error('Chart element is not available');
  //     return;
  //   }
  
  //   // Log options to verify correctness
  //   console.log('Chart Options:', options);
  
  //   const chart = new ApexCharts(this.chartElement.nativeElement, options);
  //   chart.render();
  // }
  
  
  
}
