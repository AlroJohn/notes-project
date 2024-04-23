import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { NotesFunctionService } from '../../services/notes/notes-function.service';
import { ModesService } from '../../services/modes/modes.service';
import { child, get, getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { ModalCloseComponent } from "../modal-close/modal-close.component";

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
    ]),
    trigger('settingsButton', [
      state('void', style({ opacity: 0, transform: 'translateY(600px)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(500px)' }),
        animate('0.2s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translateY(500px)' }))
      ])
    ])
  ],
  imports: [CommonModule, ModalComponent, HeaderComponent, FormsModule, ModalCloseComponent]
})
export class NotesComponent implements OnInit {

  @Input() noteUniqueKey: any;

  title: string = '';
  content: string = '';
  id: string = '';
  showModal: boolean = false;
  showDeleteModal: boolean = false;
  showSettings: boolean = false;
  notes: any[] = [];

  constructor(
    private noteService: NotesFunctionService,
    public modeService: ModesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  database = getDatabase();
  addNewNote() {
    if (this.title == '' || this.content == '') {
      alert('Please fill in all fields');
      console.log('no content');
      return;
    }

    const newNoteRef = push(ref(this.database, 'notes'));  //para makacreate ki unique identifier
    set(newNoteRef, {
      created_at: new Date().toISOString(),
      title: this.title,
      content: this.content
    })
      .then(() => {
        console.log('Note added with unique key:', newNoteRef.key);
        // Clear the form fields
        this.title = '';
        this.content = '';
        // Close the modal
        this.showModal = false;
      })
      .catch((error) => {
        console.error('Error adding note:', error);
      });
  }

  getAllNotes() {
    const db = getDatabase();
    const notesRef = ref(db, 'notes');
  
    onValue(notesRef, (snapshot) => {
      const notes: any[] = [];
      snapshot.forEach((childSnapshot) => {
        const noteData = childSnapshot.val();
        noteData.id = childSnapshot.key;
        noteData.showSettings = false;
        notes.push(noteData);
      });
  
      // Sort the notes array from latest to oldest based on the createdAt property
      notes.sort((a, b) => b.createdAt - a.createdAt);
  
      // Reverse the order of the sorted notes array
      notes.reverse();
  
      console.log('Notes:', notes);
      this.notes = notes;
    }, (error) => {
      console.error('Error fetching notes:', error);
    });
  }
  //delete passing id
  deleteModal(noteId: string) {
    // const noteSet = this.note.showSettings 
    // this.id = noteId;
    // console.log(this.id);
    // this.note.showSettings = false; // Setting showSettings to false when delete button is clicked
    // this.cdr.detectChanges(); // Force change detection

    this.notes.forEach(note => {
      if (note.id === noteId) {
        this.id = noteId;
        note.showSettings = false; // Close the settings for the clicked note
      } else {
        note.showSettings = false; // Close the settings for other notes
      }
    });
    this.showDeleteModal = !this.showDeleteModal; // Toggle the delete modal
  }


  deleteNotes(noteId: string) {
    const noteRef = ref(this.database, `notes/${noteId}`);
    remove(noteRef).then(() => {
      console.log('Note deleted successfully');
      this.showDeleteModal = false;
    }).catch((error) => {
      console.error('Error deleting note:', error);
    })
  }


  openModal() {
    this.showModal = !this.showModal;
  }

  closeDeleteModal() {
    this.showDeleteModal = !this.showDeleteModal;
  }

  showSettingEditDelete(noteId: string) {
    this.notes.forEach(note => {
      if (note.id === noteId) {
        note.showSettings = !note.showSettings;
        console.log(note.showSettings);
        
      } else {
        note.showSettings = false; // Close the settings for other notes
      }
    });
  }

}
