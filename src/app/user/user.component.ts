import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

import { User } from './user.model'; // Assuming you have a User model defined

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  imagePath = computed(() => `users/${this.user().avatar}`);
  user = input.required<User>();
  isSelectedUser = input.required<boolean>();
  selectedUser = output<string>(); // this implements type safety.

  // onSelectedUserHandler() {
  //   this.selectedUser.emit(this.id());
  // }

  onSelectedUserHandler() {
    this.selectedUser.emit(this.user().id);
  }
}
