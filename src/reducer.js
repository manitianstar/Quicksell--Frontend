import Navbar from "./Navbar";
export const initialState = {
  groupBy: "status",
  tickets: [],
  users: [],
  item: null,
  priority: "null",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_TICKETS":
      return {
        ...state,
        tickets: action.tickets,
      };
    case "SET_USER":
      return {
        ...state,
        users: action.users,
      };
    case "SET_GROUPBY":
      return {
        ...state,
        groupBy: action.groupBy,
      };
    case "SET_PRIORITY":
        return{
            ...state,
            priority: action.priority
        }
    default:
      return state;
  }
};

export default reducer;
