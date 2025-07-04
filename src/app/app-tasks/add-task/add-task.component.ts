import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  cancelAddingTask = output<void>();
  addingTask = output<{ title: string; summary: string; dueDate: string }>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelAddingTask() {
    this.cancelAddingTask.emit();
  }

  onSubmit() {
    console.log('Task Added:', {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
    // Here you would typically send the new task to a service or store it in a state management solution
    this.addingTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate, // Format to YYYY-MM-DD
    });
  }
}
