import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.scss',
})
export class AppTasksComponent {
  username = input.required<string>();
  
}
