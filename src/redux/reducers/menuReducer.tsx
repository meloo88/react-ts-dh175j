const initialState = {
  color: '#000',
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR': {
      return { ...state, color: action.payload };
    }
    default:
      return state;
  }
};

export default menuReducer;
