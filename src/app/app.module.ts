import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ComponentsModule } from './components/components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment.prod';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbModule,
    ComponentsModule,
    // NgApexchartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl], 
        disallowedRoutes: [environment.apiUrl + '/Auth/login']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // other providers
  ],  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule { }
