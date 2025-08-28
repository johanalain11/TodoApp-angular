import { Component } from '@angular/core';
import {Task} from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task';
import { AddTask } from '../add-task/add-task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, AddTask, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((newTask: Task) => {
      this.tasks.push(newTask);
    });
  }

}
