const initialState = { email: "", password: "", loading: false, error: null };

function authReducer(state = initialState, action: any) {
  if (action.type === "REQUEST_LOGIN") {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      loading: true,
      error: null,
    };
  }
  else if(action.type === "LOGIN_USER_SUCCESS") 
  {
    return {
      ...state,
      loading: false,
    };
  }
  else if(action.type === "LOGIN_USER_FAILURE") 
  {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  else if(action.type === "LOGOUT_USER") {
    return {
      ...initialState,
    }
  }
  return state;
}

export const selectUser = ({email}): string => {
  return email;
};

export const selectError = ({error}): string => {
  return error;
};

export default authReducer;
