import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { ViewNotesComponent } from './pages/view-notes/view-notes.component';

export const routes: Routes = [
    { path: 'notes', component: NotesComponent },
    { path: '', redirectTo: 'notes', pathMatch: 'full' },

    {
        path: 'notes',
        children: [
            { path: 'view', component: ViewNotesComponent },
        ]
    }

];
