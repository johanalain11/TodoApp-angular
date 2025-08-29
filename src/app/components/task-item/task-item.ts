import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  datePipe = new DatePipe('fr-FR');
  constructor() {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
}
