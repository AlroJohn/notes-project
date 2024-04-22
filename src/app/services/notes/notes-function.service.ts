import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ref, set } from '@firebase/database';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesFunctionService {
  constructor(private db: AngularFireDatabase) {}


  addNewNote(title: string, content: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.list('notes').push({
        title,
        content,
        created_at: new Date().toISOString()
      })
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  getNotes(): Observable<any[]> {
    return this.db.list('notes').valueChanges();
  }

  deleteNote(noteId: string): Promise<void> {
    return this.db.object(`notes/${noteId}`).remove().then(() => {
      console.log('Note deleted successfully');
    });
  }

  listenForNoteChanges(): Observable<any[]> {
    return this.db.list('notes').valueChanges();
  }
}
