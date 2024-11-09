import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebCardComponent } from './web-card/web-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicCardComponent } from './basic-card/basic-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    WebCardComponent,
    BasicCardComponent,
  ],
  exports: [
    WebCardComponent,
    BasicCardComponent
  ]
})
export class ComponentsModule { }
