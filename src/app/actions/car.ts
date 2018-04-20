import { Action } from '@ngrx/store';
import { Car } from '../models/cars';

export const LOAD =  '[Car] Load';
export const LOAD_COMPLETED =  '[Car] Load Completed';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Car) { }
}

export class LoadCompleted implements Action {
  readonly type = LOAD_COMPLETED;

  constructor(public success: boolean) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction |
  LoadCompleted;
