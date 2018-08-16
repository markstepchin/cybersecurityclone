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

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIELD_CHANGE":
      return Object.assign({}, state, {
        formData: state.formData.map((field, index) => {
          if (action.payLoad.index === index) {
            return Object.assign({}, field, {
              data: action.payLoad.data
            });
          }
          return field;
        })
      });
    default:
      return state;
  }
};

export default fieldReducer;
