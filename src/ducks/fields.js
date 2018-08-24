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

const fieldsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_FIELD: {
      // console.log(payload);
      // console.log(Object.keys(payload));
      const newData = {};

      Object.keys(payload).forEach(key => {
        // console.log(key);
        newData[key] = {
          $merge: payload[key]
        };
        // console.log(data);
      });

      // console.log(payload);

      return update(state, newData);
    }

    default:
      return state;
  }
};

export default fieldsReducer;
