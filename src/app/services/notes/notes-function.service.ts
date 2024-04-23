import { inject, Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';


@Injectable({
  providedIn: 'root'
})
export class NotesFunctionService {
  db = inject(Database);


}
