import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  
  darkMode: boolean = false; // Set the initial theme mode (e.g., light mode)
  
  toggleTheme() {
    this.darkMode = !this.darkMode;
  }
}
