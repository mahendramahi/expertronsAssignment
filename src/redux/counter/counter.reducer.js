import * as actionTypes from './counter.action-types';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  console.log('action ==>', action);
  console.log('state ==>', state);
  switch (action.type) {
    case actionTypes.COUNTER_INC.REQUEST:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.COUNTER_DEC.REQUEST:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };

    default:
      return state;
  }
};
