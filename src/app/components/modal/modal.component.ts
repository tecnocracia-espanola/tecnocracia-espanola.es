import { Component, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {
  @ViewChild('modal') modal: any;

  @Input() title: string = 'Modal Title';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'lg';
  @Input() hasClose: boolean = true;
  @Input() backdropClose: boolean = true;
  @Input() autoClose: boolean = true;

  // OK Button
  @Input() hasOk: boolean = true;
  @Input() okDisabled: boolean = false;
  @Input() cssOk: string = 'success';
  @Input() textOk: string = 'Ok';
  @Output() onOk: EventEmitter<void> = new EventEmitter<void>();

  // Cancel Button
  @Input() hasCancel: boolean = true;
  @Input() cancelDisabled: boolean = false;
  @Input() cssCancel: string = 'secondary';
  @Input() textCancel: string = 'Cancel';
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  cancelled = true;

  constructor(private modalService: NgbModal) {}

  ngOnDestroy(): void {
    this.modalService.dismissAll();
  }

  open(): void {
    this.cancelled = false;
    const modalOptions: NgbModalOptions = {
      size: this.parseSize(this.size),
      ariaLabelledBy: 'modal-basic-title',
      backdrop: this.backdropClose ? true : 'static',
      keyboard: this.backdropClose
    };

    this.modalService.open(this.modal, modalOptions).result.catch(() => {
      this.onCancelClick();
    });
  }

  close(): void {
    this.modalService.dismissAll();
  }

  onOkClick(): void {
    this.onOk.emit();
    if (this.autoClose) {
      this.close();
    }
  }

  onCancelClick(): void {
    this.cancelled = true;
    this.onCancel.emit();
    this.close();
  }

  private parseSize(size: string): string {
    switch (size) {
      case 'sm': return 'sm';
      case 'xl': return 'xl';
      case 'xxl': return 'xxl';
      default: return 'lg';
    }
  }
}
