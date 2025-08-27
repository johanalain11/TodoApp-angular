import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  title = 'My Application';
}
