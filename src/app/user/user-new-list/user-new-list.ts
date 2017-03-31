import {UserStore} from "../user-store";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {User} from "../user";
/**
 * Created by Administrateur on 31/03/2017.
 */

@Component({
  selector: 'app-user-list-new',
  templateUrl: './user-new-list.component.html'
})
export class UserListNewComponent {

  @Input() userList:User[];
  @Output() onUserDelete = new EventEmitter<User>();

  constructor() {
    this.userList = [];
  }

  deleteUser(user:User) {
    this.onUserDelete.emit(user);
  }

}
