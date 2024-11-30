import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() okButtonText: string = 'OK';
  @Input() cancelButtonText: string = 'Cancel';
  @Input() preventCancelClose: boolean = false; // If true, cancel won't close the modal
  @Output() okAction = new EventEmitter<void>();
  @Output() cancelAction = new EventEmitter<void>();

  closeModal() {
    // Emit cancel action and only close the modal if preventCancelClose is false
    this.cancelAction.emit();
    if (!this.preventCancelClose) {
      this.hide();
    }
  }

  confirmAction() {
    // Emit OK action
    this.okAction.emit();
    this.hide();
  }

  hide() {
    // Logic to hide the modal (if using Bootstrap or other framework)
    const modalElement = document.getElementById('app-modal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }

  show() {
    // Logic to show the modal
    const modalElement = document.getElementById('app-modal');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }
}
