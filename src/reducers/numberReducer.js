import {UP_NUMBER, DOWN_NUMBER} from '../actions/types';

const initialState = {
  number: 0,
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case UP_NUMBER:
      return {
        ...state,
        number: state.number + 1,
      };
    case DOWN_NUMBER:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default numberReducer;
