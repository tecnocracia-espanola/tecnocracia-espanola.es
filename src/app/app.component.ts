// app.component.ts
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ToolsService } from './services/tools.service';
import { AuthService } from './services/auth.service';
import { sharedImports } from './app-setup';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [sharedImports],
})
export class AppComponent implements OnInit {
  tooltipContent: string = '🔨 En desarrollo...<br>Explicación sobre cómo se gestionan el código, las decisiones y los fondos del proyecto.';
  showAlert = false
  angularVersion = VERSION.full;
  currentDate = '';

  //#region WEB TITLE
  title = 'Tecnocracia Española';
  changeTitle() {
    const randomIndex = Math.floor(Math.random() * this.titles.length);
    this.title = this.titles[randomIndex];
  }

  titles: string[] = [
    'InnovaCívica', 'Sociedad Transparente', 'Tecnosociedad', 'España 3.0',
    'Poder Abierto', 'Futuro Sostenible', 'CivisTech', 'Transparencia Activa',
    'España Participativa', 'Red Cívica', 'Tecnodemos', 'Valiente Sociedad',
    'Justicia Digital', 'España Inteligente', 'Veritas Ciudadana', 'Sociedad Sostenible',
    'España Proactiva', 'Cambio en Red', 'Revolución Cívica', 'Comunidad Tecnoética',
    'España Consciente', 'Transparencia España', 'Soluciones Abiertas', 'Futuro Ético',
    'Visión Pública', 'Futuro Honesto', 'Digital Ciudadana', 'España en Datos',
    'Tecnovisión', 'Civitas Inteligente', 'Empoderar Sociedad', 'Proyectos Éticos',
    'Evolución Cívica', 'España en Red', 'Cívica Tech', 'Nexos Éticos',
    'TecnoFuturo España', 'Ideas Transparentes', 'Compromiso Ciudadano', 'España Ética',
    'Transforma España', 'Soluciones Conectadas', 'Generación Transparente', 'Futuro Abierto',
    'Red Abierta', 'Civismo en Acción', 'Demos Digital', 'Sociedad en Datos',
    'Tecnoservicio', 'Innovación Pública', 'Proyectos con Sentido', 'Cambio Ético',
    'Futuro en Red', 'Justicia Participativa', 'Tecnodiversidad', 'España Honesta',
    'Demos Abierto', 'Civismo Avanzado', 'Ideas en Red', 'España Transparente',
    'Ética y Tecnología', 'Futuro Colectivo', 'Proyectos Éticos', 'Pacto Transparente',
    'Sociedad de Datos', 'Iniciativa Ética', 'España en Progreso', 'Red Honesta',
    'Civismo Futurista', 'España Verde y Ética', 'Tecnología Pública', 'Desafío España',
    'Innova Ética', 'Alianza Cívica', 'Transparencia Colectiva', 'Sociedad Honesta',
    'Data España', 'TecnoParticipa', 'Ideas en Marcha', 'Proyectos en Datos',
    'Cívica Avanzada', 'Compromiso Cívico', 'Revolución Ética', 'España Ciudadana',
    'Demos Futuro', 'Visión Ética', 'Sociedad Responsable', 'España Real',
    'Honestidad en Red', 'TecnoAlianza', 'Futuro Claro', 'España Activa',
    'Proyectos Participativos', 'Civismo Inteligente', 'Red Ética', 'España Innovadora',
    'Colaboración Cívica', 'Justicia Transparente', 'España en Transparencia', 'Comunidad Digital'
  ];
  //#endregion

  constructor(public tools: ToolsService, public authService: AuthService, private router: Router) { }

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
  selectedMenu: string = 'Nuestra propuesta';

  navItems = [
    { label: 'Nuestra propuesta', route: '/home' },
    { label: 'Votaciones y propuestas', route: '/election-management' },
    { label: 'Cronologia de eventos', route: '/chronology' },
    { label: 'Foro', route: '/forum' },
    { label: 'Informacion de la web', route: '/web-info' },
    { label: 'Estudios politicos', route: '/political-studies' },
    // { label: 'Aviso Legal', route: '/legal-notice' },
    // { label: 'Política de Privacidad', route: '/privacy-policy' },
    // { label: 'Términos y Condiciones', route: '/terms-conditions' },
    // { label: 'Política de Cookies', route: '/cookie-policy' },
    // { label: 'Declaración de Transparencia', route: '/transparency-statement' },
    // { label: 'Condiciones de Participación', route: '/participation-terms' },
    // { label: 'Cláusula de Modificaciones', route: '/modification-clause' }
  ];

  private updateSelectedMenu(url: string) {
    if (url.includes('/home')) {
      this.selectedMenu = 'Nuestra propuesta';
    } else if (url.includes('/election-management')) {
      this.selectedMenu = 'Votaciones y propuestas';
    } else if (url.includes('/forum')) {
      this.selectedMenu = 'Foro';
    } else if (url.includes('/chronology')) {
      this.selectedMenu = 'Cronologia de eventos';
    } else if (url.includes('/web-info')) {
      this.selectedMenu = 'Informacion de la web';
    } else if (url.includes('/legal-notice')) {
      this.selectedMenu = 'Aviso Legal';
    } else if (url.includes('/privacy-policy')) {
      this.selectedMenu = 'Política de Privacidad';
    } else if (url.includes('/terms-conditions')) {
      this.selectedMenu = 'Términos y Condiciones';
    } else if (url.includes('/cookie-policy')) {
      this.selectedMenu = 'Política de Cookies';
    } else if (url.includes('/transparency-statement')) {
      this.selectedMenu = 'Declaración de Transparencia';
    } else if (url.includes('/participation-terms')) {
      this.selectedMenu = 'Condiciones de Participación';
    } else if (url.includes('/modification-clause')) {
      this.selectedMenu = 'Cláusula de Modificaciones';
    }
  }


  navigate(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  //#endregion

  toggleAuth(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    } else {
      this.authService.login(this.email, this.password);
    }
  }

  // Method to handle login
  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: () => alert('Login successful!'),
      error: (err) => alert('Login failed: ' + err.message),
    });
  }

  // Method to handle logout
  logout(): void {
    this.authService.logout();
    alert('Logged out successfully!');
  }


  @ViewChild('modal') modal!: ModalComponent;

  email: string = '';
  password: string = '';

  ngAfterViewInit(): void {}

  openModal(): void {
    this.modal.open();
  }

  onConfirm(): void {
    alert(`Email: ${this.email}\nPassword: ${this.password}`);
    this.modal.close();
  }

  onCancel(): void {
    this.modal.close();
  }
}