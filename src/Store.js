import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const initialState = {
  formData: [
    {
      index: 0,
      data: "test company"
    },
    {
      index: 1,
      data: "test type"
    },
    {
      index: 2,
      data: "1995"
    }
  ]
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
