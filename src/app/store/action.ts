import { User } from "./user";

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public user: User) {}
}
  
export class SetUsers {
  static readonly type = '[User] Set Users';
  constructor(public users: User[]) {}
}