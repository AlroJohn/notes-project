import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Output, Renderer2 } from '@angular/core';
import { ModesService } from '../../services/modes/modes.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() open = new EventEmitter<void>();
  onOpen() {
    this.open.emit();
  }

  public retroMode:boolean = true;

  modesOnOff() {
    this.retroMode = !this.retroMode;
    document.body.setAttribute( 'data-theme', this.retroMode ? 'dark' : 'retro')
  }
}
