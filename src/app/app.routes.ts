import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortalLogsComponent } from './pages/system/portal-logs/portal-logs.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portal-logs', component: PortalLogsComponent },
];

