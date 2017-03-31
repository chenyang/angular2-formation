/**
 * Created by Administrateur on 30/03/2017.
 */

import {Component} from "@angular/core";
import {UserStore} from "../../user-store";
import {User} from "../../user";
@Component({
  selector: 'app-user-list-old',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListOldComponent{
  private userList;
  private currentUser:User;
  private userStore: UserStore;

  constructor(){
    this.userStore = new UserStore();//INSTANCED!! NEED SINGLETON
    this.userList = this.userStore.getUserList();
    this.currentUser = new User({firstName:'', lastName:'', email:''});
  }

  /** userStore service related **/
  reset(){
    this.currentUser = new User({firstName:'', lastName:'', email:''});
  }

  getUserList(){
    return this.userStore.getUserList();
  }

  removeAll(){
    this.userStore.removeAll();
  }

  addUser(user: User) {
    let nUser = new User(user);//take note to the user Schema
    console.log('adding user', this.currentUser);
    let newUserList = [nUser, ...this.userStore.getUserList()];
    this.userStore.setUserList(newUserList);
  }

  removeUser(user: User) {
    //return all user not in userList
    //this.currentUser = user;
    this.userList = this.userStore.removeUser(user);
  }

  edit(user:User){
    console.log("currently editing user: ", user);
  }


  /** IHM specific functionalites**/
  checkInput(){
    if(this.currentUser.firstName !=='' && this.currentUser.lastName !==''){
      return true;
    }else{
      return false;
    }
  }

}
