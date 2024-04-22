import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModesService } from '../../services/modes/modes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule],

})
export class HeaderComponent {
  @Input() headerButton: any;
  @Output() open = new EventEmitter<void>();

  constructor(private modeService: ModesService) {}

  onOpen() {
    this.open.emit();
  }

  get retroMode(): boolean {
    return this.modeService.retroMode;
  }

  modesOnOff() {
    this.modeService.retroMode = !this.modeService.retroMode;
    document.body.setAttribute('data-theme', this.modeService.retroMode ? 'retro' : 'dark');
  }
}