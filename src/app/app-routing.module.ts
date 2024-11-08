import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortalLogsComponent } from './pages/system/portal-logs/portal-logs.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portal-logs', component: PortalLogsComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
