import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-view-notes',
    standalone: true,
    templateUrl: './view-notes.component.html',
    styleUrl: './view-notes.component.css',
    imports: [HeaderComponent]
})
export class ViewNotesComponent {

}
