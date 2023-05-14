import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(false);

  toggleDarkTheme() {
    this._darkTheme.next(!this._darkTheme.value);
  }

  isDarkTheme(): Observable<boolean> {
    return this._darkTheme.asObservable();
  }
}
