import update from 'immutability-helper';
import { createAction } from 'redux-actions';

// Action type
const UPDATE_FIELD = 'UPDATE_FIELD';

// Action
export const updateField = createAction(UPDATE_FIELD);

// Reducer
const initialState = {
  business_info: {},
  contact_info: {}
};

const fieldsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD: {
      const { payload } = action;

      console.log(payload);
      // console.log(Object.keys(payload));
      const data = {};

      Object.keys(payload).forEach(key => {
        console.log(key);
        data[key] = {
          $merge: payload[key]
        };
        console.log(data);
      });

      // console.log(payload);

      return update(state, data);
    }

    default:
      return state;
  }
};

export default fieldsReducer;
