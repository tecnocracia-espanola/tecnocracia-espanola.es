import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

export const sharedImports = [CommonModule, FormsModule, ComponentsModule, RouterModule, NgbTooltip];