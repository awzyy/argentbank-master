const initialState = {
    token: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          token: action.payload.token,
          error: null
        };
      case 'AUTH_ERROR':
        return {
          ...state,
          token: '',
          error: action.payload.error
        };
      case 'LOGOUT':
          return {
          ...state,
          token:null,
          error:null,
          }
      default:
        return state; 
    }
  };
  
  export default authReducer;