import { LOAD, LoadAction, LoadCompleted } from '../actions/car';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Car } from '../models/cars';

@Injectable()
export class CarEffects {
  @Effect()
  load$ = this.actions$.pipe(
    ofType(LOAD),
    map( (action: LoadAction) => new LoadCompleted(true))
  );


  constructor(private actions$: Actions) {}
}

