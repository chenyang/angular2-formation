/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent {

    @Input() buttonLabel: string;
    @Input() user:User;
    @Output() onUserAdd = new EventEmitter<User>();

    constructor() {
      this.reset();
    }

    addUser() {
        console.log("adding User in app-user-form", this.user);
        this.onUserAdd.emit(this.user);
        this.reset();
    }

    reset(){
      this.user = new User({firstName:'', lastName:'', email:''});
    }
}
