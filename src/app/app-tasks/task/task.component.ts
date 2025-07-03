import { Component, input, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  taskCompleted = output<string>();

  onTaskCompleted() {
    this.taskCompleted.emit(this.task().id);
  }
}
