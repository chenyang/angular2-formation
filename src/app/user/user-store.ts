/**
 * Created by Administrateur on 30/03/2017.
 */
import {User} from "./user";
import {Inject, Injectable} from "@angular/core";

@Injectable()
export class UserStore{
  private userList: User[];//declaration

  constructor(){
    this.userList = [];
  }

  getUserList() {
    return this.userList;
  }

  setUserList (users:User[]){
    this.userList = users;
  }

  addUser(user: User) {
    //this._userList = [...this._userList, user]; //Note: keep in mind: Immutable
    this.userList = [user, ...this.userList];
  }

  removeAll(){
    this.userList = [];
  }

  removeUser(user: User) {
    //return all user not in userList
    this.userList = this.userList.filter((_user) => _user !== user); //compare reference
    /**
     this._userList = this._userList.filter(function(_user){
            return _user!==user;
         })
     **/
  }

}
