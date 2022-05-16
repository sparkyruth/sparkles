import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInterfaceService {
darkModeState: BehaviorSubject<boolean>;

  constructor() { 
    this.darkModeState = new BehaviorSubject<boolean>(false);
  }
}
