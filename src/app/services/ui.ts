import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  toggleAddTask(): void {
    console.log('Show AddTask 1', this.showAddTask);
    this.showAddTask = !this.showAddTask;
    console.log('Show AddTask 2', this.showAddTask);
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

}
