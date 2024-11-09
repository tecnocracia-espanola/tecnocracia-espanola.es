import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ComponentsModule } from './components/components.module';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChronologyComponent } from './pages/chronology/chronology.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbModule,
    ComponentsModule,
    NgApexchartsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule { }
