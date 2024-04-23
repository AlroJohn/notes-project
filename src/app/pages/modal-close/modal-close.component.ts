import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModesService } from '../../services/modes/modes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-close',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-close.component.html',
  styleUrl: './modal-close.component.css'
})
export class ModalCloseComponent {
  coffee = 'coffee';
  retro =  'retro';

  constructor(public modeService: ModesService) {}
  @Input() modalDelete: any;

  @Output() onDeleteModalClose = new EventEmitter<void>();

  modalClose() {
    this.onDeleteModalClose.emit();
  }
}
