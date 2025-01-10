import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ModalConfig {
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<{ isOpen: boolean; config?: ModalConfig; content?: string }>();
  modalState$ = this.modalSubject.asObservable();

  open(config?: ModalConfig, content?: string) {
    this.modalSubject.next({ isOpen: true, config, content });
  }

  close() {
    this.modalSubject.next({ isOpen: false });
  }
}
