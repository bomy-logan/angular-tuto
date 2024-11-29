import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { User } from "./user";
import { AddUser, SetUsers } from './action';

export interface UserStateModel {
  usersList: User[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    usersList: []
  }
})

@Injectable()

export class UserState {

  @Action(AddUser)
  addUser(ctx: StateContext<UserStateModel>, action: AddUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      usersList: [...state.usersList, action.user]
    });
  }

  @Action(SetUsers)
  setUsers(ctx: StateContext<UserStateModel>, action: SetUsers) {
    ctx.setState({
      usersList: action.users
    });
  }
}
