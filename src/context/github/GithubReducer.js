const GithubReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isloading: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload.data,
        repos: action.payload.data2,
        isloading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isloading: true,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
  }
};

export default GithubReducer;
