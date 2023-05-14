import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dark-icon',
  templateUrl: './dark-icon.component.html',
  styleUrls: ['./dark-icon.component.scss'],
})
export class DarkIconComponent {
  @Input() darkMode?: boolean;
}
