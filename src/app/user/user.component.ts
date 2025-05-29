import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `users/${this.selectedUser.avatar}`;
  }

  onSelectedUserHandler() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
