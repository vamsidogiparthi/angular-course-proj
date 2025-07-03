import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { AppTasksComponent } from './app-tasks/app-tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    UserComponent,
    AppTasksComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-course-proj';
  users = DUMMY_USERS;
  selectedUserName = signal<string>('');
  selectedUserId = signal<string>('');

  onSelectedUserHandler(Id: string) {
    console.log('Selected User ID:', Id);
    let user = this.users.find((u) => u.id === Id);
    this.selectedUserName.set(user?.name ?? '');
    this.selectedUserId.set(user?.id ?? '');
  }
}
