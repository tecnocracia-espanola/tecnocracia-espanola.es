import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebCardComponent } from './web-card/web-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    WebCardComponent,
    BasicCardComponent,
    ModalComponent
  ],
  exports: [
    WebCardComponent,
    BasicCardComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
