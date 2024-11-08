// main.server.ts
import { bootstrapApplication } from '@angular/platform-browser'; // Correct import
import { AppComponent } from './app/app.component';
import { appConfig } from './app/bootstrap';
import { provideServerRendering } from '@angular/platform-server';
import { ApplicationRef } from '@angular/core';

export function bootstrap(): Promise<ApplicationRef> {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...appConfig.providers,
      provideServerRendering(),
      // Add any server-specific providers here
    ],
  });
}

export default bootstrap; // Add default export
