import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Router from "./Router";

const reducer = () => {
  return {
    formData: {
      0: "",
      1: "",
      2: "",
      3: ""
    }
  };
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
