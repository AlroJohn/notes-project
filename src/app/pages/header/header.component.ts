import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ModesService } from '../../services/modes/modes.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
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