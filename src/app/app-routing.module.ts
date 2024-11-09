import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WebInfoComponent } from './pages/system/web-info/web-info.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { NgModule } from '@angular/core';
import { ElectionManagementComponent } from './pages/election-management/election-management.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'election-management', component: ElectionManagementComponent },
  { path: 'chronology', component: ChronologyComponent },
  { path: 'web-info', component: WebInfoComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
