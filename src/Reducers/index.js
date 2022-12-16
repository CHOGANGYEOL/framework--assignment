import { DECREASE, INCREASE } from '../Actions';
import { initialState } from './initialState';

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case 'SET-NUMBER':
      return action.payload;
    default:
      return state;
  }
};
