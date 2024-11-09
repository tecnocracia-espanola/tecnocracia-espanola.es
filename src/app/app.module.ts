import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbModule,
    ComponentsModule
  ],
  providers: []
})

export class AppModule { }
