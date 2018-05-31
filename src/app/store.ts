import { ADD_DATA } from './actions';

export interface IAppState {
  data: number[];
}

export const INITIAL_STATE: IAppState = {
  data: [1, 2, 3],
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_DATA:
      return Object.assign({}, state, {
        data: [...state.data, action.data],
      });
    default:
      break;
  }
  return state;
}
