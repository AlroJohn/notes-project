import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { AngularFireList } from '@angular/fire/compat/database';
import { NotesFunctionService } from '../../services/notes/notes-function.service';
import { Observable } from 'rxjs';

interface Note {
  title: string;
  content: string;
  created_at: Date;
}
@Component({
  selector: 'app-notes',
  standalone: true,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
  animations: [
    trigger('modalAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate('0.2s ease-in-out')
      ])
    ]),
    trigger('translateAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(500px)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(500px)' }),
        animate('0.2s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translateY(500px)' }))
      ])
    ])

  ],
  imports: [CommonModule, ModalComponent, HeaderComponent, FormsModule]
})
export class NotesComponent implements OnInit {
  title: string = '';
  content: string = '';
  notes$: Observable<Note[]> | undefined;
  showModal: boolean = false;

  constructor(private noteService: NotesFunctionService) { }

  ngOnInit(): void {
    this.notes$ = this.noteService.getNotes();
  }

  openModal() {
    this.showModal = !this.showModal;
  }


  addNewNote(): void {
    if (this.title && this.content) {
      this.noteService.addNewNote(this.title, this.content)
        .then(() => {
          console.log('Note added successfully!');
          // Clear the form fields after successfully adding the note
          this.title = '';
          this.content = '';
          this.showModal = false;
        })
        .catch(error => {
          console.error('Error adding note:', error);
        });
    } else {
      console.error('Title and content are required.');
    }
  }

  deleteNote() {
    const noteId = ''; // Replace with the actual note ID
    this.noteService.deleteNote(noteId)
      .then(() => {
        console.log('Note deleted successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
