// app.component.ts
import { Component, OnInit, VERSION } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ToolsService } from './services/tools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentsModule],
})
export class AppComponent implements OnInit {

  title = 'Tecnocracia Española';
  angularVersion = VERSION.full;
  currentDate = '';

  constructor(public tools: ToolsService, private router: Router) { }

  ngOnInit(): void {
    this.updateSelectedMenu(this.router.url);
    this.setCurrentDate();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedMenu(event.url);
      }
    });
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }

  onFontChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedFont = target.value;
    this.tools.setFontFamily(selectedFont);
  }

  //#region CURRENT DATE
  private setCurrentDate(): void {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    this.currentDate = `${day} de ${month} de ${year}`;
  }
  //#region 

  //#region NAVIGATION 
  navItems = [
    { label: 'Nuestra propuesta', route: '/home' },
    { label: 'Votaciones y propuestas', route: '/election-management' },
    { label: 'Cronologia de eventos', route: '/chronology' },
    { label: 'Foro', route: '/forum' },
    { label: 'Informacion de la web', route: '/web-info' },
    // { label: 'Ejemplos de interfaz', route: '/examples' }
  ];

  selectedMenu: string = '';

  private updateSelectedMenu(url: string) {
    if (url.includes('/home')) {
      this.selectedMenu = 'Nuestra propuesta';
    } else if (url.includes('/election-management')) {
      this.selectedMenu = 'Votaciones y propuestas';
    } else if (url.includes('/forum')) {
      this.selectedMenu = 'Forum';
    } else if (url.includes('/chronology')) {
      this.selectedMenu = 'Cronologia de eventos';
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
