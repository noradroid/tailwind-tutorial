import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarIconComponent } from './sidebar-icon/sidebar-icon.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarIconComponent, ContentComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  icons = ['home', 'star', 'favorite', 'browse_activity', 'delete'];
}
