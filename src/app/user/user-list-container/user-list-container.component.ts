/**
 * Created by Administrateur on 31/03/2017.
 */
/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import {Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html'
})
export class UserListContainerComponent implements OnInit{

 constructor(private userStore: UserStore) {// quick creating constructor & inject service

 }

  ngOnInit() {
    console.log("on init UserListContainerComponent");
  }

  addUser(user:User){
    this.userStore.addUser(user);
    console.log("in container adding user:", user);
    console.log("current has:"+ this.userStore.getUserList().length);
  }

  deleteUser(user:User){
    this.userStore.removeUser(user);
  }

  getUserList(){
    return this.userStore.getUserList();
  }

}
