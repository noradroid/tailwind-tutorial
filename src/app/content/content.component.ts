import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, map } from 'rxjs';

import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  mode$: Observable<'dark' | 'light'> = this.darkMode$.pipe(
    map((dark) => (dark ? 'light' : 'dark'))
  );

  constructor(private darkModeService: DarkModeService) {}

  switchMode(mode: 'dark' | 'light'): void {
    this.darkModeService.changeMode(mode);
  }
}
