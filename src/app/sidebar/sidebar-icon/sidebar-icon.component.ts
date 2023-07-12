import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-icon.component.html',
  styleUrls: ['./sidebar-icon.component.css'],
})
export class SidebarIconComponent {
  @Input() icon = '';
}
