import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  darkMode$: Observable<boolean> = this.darkMode.asObservable();

  constructor() {
    const mode = localStorage.getItem('mode');
    if (mode && this.isValidMode(mode)) {
      this.changeMode(mode as 'dark' | 'light');
    } else {
      this.changeMode('dark');
    }
  }

  changeMode(mode: 'dark' | 'light'): void {
    if (this.isDarkMode(mode)) {
      this.darkMode.next(true);
      document.getElementsByClassName('h-screen')[0].classList.add('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      this.darkMode.next(false);
      document.getElementsByClassName('h-screen')[0].classList.remove('dark');
      localStorage.setItem('mode', 'light');
    }
  }

  isValidMode(mode: string): boolean {
    return mode === 'dark' || mode === 'light';
  }

  isDarkMode(mode: 'dark' | 'light'): boolean {
    return mode === 'dark';
  }
}
