const SET_STATE = 'Console/SET_STATE';

export const setState = (state) => {
  return { type: SET_STATE, payload: state };
};

const getInitialState = () => {
  return {
    siderMenuSelectedKey: 'tickets',
  };
};

const reducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SET_STATE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
