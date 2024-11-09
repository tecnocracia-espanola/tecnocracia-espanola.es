import { Injectable, Renderer2, RendererFactory2, RendererStyleFlags2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private renderer: Renderer2;
  private isDesktopSubject = new BehaviorSubject<boolean>(this.checkIsDesktop());
  isDesktop$ = this.isDesktopSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    window.addEventListener('resize', () => this.updateIsDesktop());
  }

  private checkIsDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  private updateIsDesktop(): void {
    const isDesktop = this.checkIsDesktop();
    this.isDesktopSubject.next(isDesktop);
  }

  isDesktop(): boolean {
    return this.isDesktopSubject.value;
  }

  //#region CHANGE WEB FONT
   fontOptions: string[] = [
    'Lato, sans-serif',
    '"PT Sans", "PT Serif", sans-serif',
    '"Open Sans", sans-serif',
    'Quicksand, sans-serif',
    'Georgia, serif',
    'Arial, Calibri, Verdana, sans-serif',
    'Helvetica, Arial, sans-serif',
    'Verdana, Geneva, sans-serif',
    'Rooney, serif',
    'Karla, sans-serif',
    'Roboto, sans-serif',
    'Futura, "Trebuchet MS", sans-serif',
  ];

  getFontOptions(): string[] {
    return this.fontOptions;
  }
 
  setFontFamily(fontFamily: string): void {
    const htmlElement = document.documentElement;
    // const bodyElement = document.body;
    const headerElement = document.querySelector('header');
    const bodyElement = document.querySelector('body');
    const footerElement = document.querySelector('footer');

    if (htmlElement) {
      this.renderer.setStyle(htmlElement, 'font-family', fontFamily);
    }
    if (bodyElement) {
      this.renderer.setStyle(bodyElement, 'font-family', fontFamily);
    }
    if (headerElement) {
      this.renderer.setStyle(headerElement, 'font-family', fontFamily);
    }
    if (footerElement) {
      this.renderer.setStyle(footerElement, 'font-family', fontFamily);
    }
  }

  //#endregion
}
