import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ToolsService } from '../../services/tools.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentsModule],
  encapsulation: ViewEncapsulation.None 
})
export class ElectionManagementComponent {
  url = "https://infoelectoral.interior.gob.es/es/proceso-electoral/calendario-electoral/"
  

  constructor(private tools: ToolsService) {}


}
