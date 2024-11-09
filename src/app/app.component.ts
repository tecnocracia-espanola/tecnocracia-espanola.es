// app.component.ts
import { Component, OnInit, VERSION } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ToolsService } from './services/tools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentsModule],
})
export class AppComponent implements OnInit {

  title = 'Tecnocracia Española';
  angularVersion = VERSION.full;
  currentDate = new Date();

  constructor(public tools: ToolsService, private router: Router) { }

  ngOnInit(): void {
    this.updateSelectedMenu(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedMenu(event.url);
      }
    });
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }


  //#region NAVIGATION 
  navItems = [
    { label: 'Nuestra propuesta', route: '/home' },
    { label: 'Informacion de la web', route: '/web-info' },
    // { label: 'Ejemplos de interfaz', route: '/examples' }
  ];

  selectedMenu: string = '';

  private updateSelectedMenu(url: string) {
    if (url.includes('/home')) {
      this.selectedMenu = 'Nuestra propuesta';
    } else if (url.includes('/web-info')) {
      this.selectedMenu = 'Registros de la web';
    } else if (url.includes('/examples')) {
      this.selectedMenu = 'Ejemplos de interfaz';
    }
  }
  navigate(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  //#endregion
}
