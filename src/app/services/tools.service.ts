import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private isDesktopSubject = new BehaviorSubject<boolean>(this.checkIsDesktop());
  isDesktop$ = this.isDesktopSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => this.updateIsDesktop());
  }

  private checkIsDesktop(): boolean {
    return window.innerWidth >= 1024; // Adjust the breakpoint as needed
  }

  private updateIsDesktop() {
    const isDesktop = this.checkIsDesktop();
    this.isDesktopSubject.next(isDesktop);
  }

  isDesktop(): boolean {
    return this.isDesktopSubject.value;
  }

}
