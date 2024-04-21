import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';

export const routes: Routes = [
    {path: 'notes', component : NotesComponent},
    {path: '', redirectTo: 'notes', pathMatch: 'full'},
    
];
