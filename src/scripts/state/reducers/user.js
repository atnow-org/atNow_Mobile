import ActionTypes from '../actions/actionTypes';

const user = {};

const UserReducer = (state = user, action) => {
  console.log('got to reducer');
  switch (action.type) {
    case ActionTypes.GET_USER:
      return { ...state, ...action.payload };
    case ActionTypes.NEW_USER:
      return { ...state, ...action.payload };
    case ActionTypes.SIGN_OUT:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
