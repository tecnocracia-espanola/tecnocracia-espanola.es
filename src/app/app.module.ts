import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortalLogsComponent } from './pages/system/portal-logs/portal-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortalLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
