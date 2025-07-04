import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.scss',
})
export class AppTasksComponent {
  username = input.required<string>();
  userId = input.required<string>();
  isAddingTask = signal<boolean>(false);

  dummyTasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  userTasks = computed(() => {
    return this.dummyTasks().filter((task) => task.userId === this.userId());
  });

  onTaskCompletedHandler(taskId: string) {
    console.log(`Task with ID ${taskId} completed by user ${this.username()}`);
    // Here you would typically update the task status in your data store
    this.dummyTasks.set(this.dummyTasks().filter((task) => task.id !== taskId));
  }

  onAddTask() {
    this.isAddingTask.set(true);
    console.log('Add Task button clicked');
    // Here you would typically open a modal or navigate to a task creation page
  }

  onTaskSubmission({ title, summary, dueDate }: { title: string; summary: string; dueDate: string }) {
    this.dummyTasks.set([
      ...this.dummyTasks(),
      {
        id: `t${this.dummyTasks().length + 1}`,
        userId: this.userId(),
        title: title,
        summary: summary,
        dueDate: dueDate, // Current date as due date
      }]);
    this.isAddingTask.set(false);
  }

  onCancelAddingTaskEvent() {
    this.isAddingTask.set(false);
    console.log('Adding task cancelled');
    // Here you would typically close the modal or reset the task creation form
  }
}
