import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Tasks } from '../tasks/tasks';
import { UiService } from '../../services/ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  title = 'My Application';
  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
