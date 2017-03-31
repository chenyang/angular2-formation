/**
 * Created by Administrateur on 30/03/2017.
 */
/**
 * Created by Administrateur on 29/03/2017.
 */
export class UserSchema{
  firstName:string;
  lastName:string;
  email:string;
  constructor(args: UserSchema) {
  this.firstName = args.firstName;
  this.lastName = args.lastName;
  this.email = args.email;
}
}

export class User extends UserSchema{
  // adding some additional functions for user
}
