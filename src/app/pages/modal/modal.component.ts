import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ModesService } from '../../services/modes/modes.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  coffee = 'coffee';
  retro =  'retro';

  constructor(public modeService: ModesService) {}
  
  @Input() modalContent: any;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }


}
