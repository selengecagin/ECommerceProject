const initialState = {
  cart: [], //product objects and their counts
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shoppingCartReducer;
