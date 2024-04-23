import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  private _retroMode: boolean = true;

  get retroMode(): boolean {
    return this._retroMode;
  }

  set retroMode(value: boolean) {
    
    this._retroMode = value;
  }
}