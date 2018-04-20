import { createSelector } from 'reselect';
import { Car } from '../models/cars';
import * as car from '../actions/car';


export interface CarState {
  ids: string[];
  entities: { [id: string]: Car };
}

export const initialState: CarState = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: car.Actions): CarState {

  switch (action.type) {

    case car.LOAD: {
      const carPayload = action.payload;

      if (state.ids.indexOf(carPayload.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, carPayload.id ],
        entities: Object.assign({}, state.entities, {
          [carPayload.id]: carPayload
        })
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: CarState) => state.entities;

export const getIds = (state: CarState) => state.ids;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
