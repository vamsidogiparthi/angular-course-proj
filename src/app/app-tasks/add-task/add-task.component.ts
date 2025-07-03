import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
 
  cancelAddingTask = output<void>();

  onCancelAddingTask() {
    this.cancelAddingTask.emit();
  }

}
