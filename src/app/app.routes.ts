import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { ViewNotesComponent } from './pages/view-notes/view-notes.component';
import { LoginComponent } from './logs/login/login.component';
import { RegisterComponent } from './logs/register/register.component';

export const routes: Routes = [
    { path: 'notes', component: NotesComponent },
    { path: '', redirectTo: 'notes', pathMatch: 'full' },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    {
        path: 'notes',
        children: [
            { path: 'view', component: ViewNotesComponent },
        ]
    },



];
