import {
  SET_NAME,
  SET_ACCOUNT,
  ADD_PURCHASE,
  REMOVE_PURCHASE,
  SET_PURCHASE_PLACE,
  SET_PURCHASE_DATE,
  SET_PURCHASE_DESCRIPTION,
  SET_PURCHASE_SUM,
} from "../constants/actionTypes";

const purchaceTemplate = {
  place: "",
  date: "",
  description: "",
  sum: "",
}

const initialState = {
  name: "",
  account: "",
  purchases: [
    purchaceTemplate
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.name
      });

    case SET_ACCOUNT:
      return Object.assign({}, state, {
        account: action.account
      });

    case ADD_PURCHASE:
      return Object.assign({}, state, {
        purchases: state.purchases.concat(purchaceTemplate)
      });

    case REMOVE_PURCHASE:
      return Object.assign({}, state, {
        // Drop the id away.
        purchases: state.purchases.slice(0, action.id).concat(state.purchases.slice(action.id + 1))
      });

    case SET_PURCHASE_PLACE:
      return Object.assign({}, state, {
        purchases: state.purchases.map((purchase, id) => {
          if (id === action.id) {
            return Object.assign({}, purchase, {
              place: action.place
            });
          }
          return purchase;
        })
      });

    case SET_PURCHASE_DATE:
      return Object.assign({}, state, {
        purchases: state.purchases.map((purchase, id) => {
          if (id === action.id) {
            return Object.assign({}, purchase, {
              date: action.date
            });
          }
          return purchase;
        })
      });

    case SET_PURCHASE_DESCRIPTION:
      return Object.assign({}, state, {
        purchases: state.purchases.map((purchase, id) => {
          if (id === action.id) {
            return Object.assign({}, purchase, {
              description: action.description
            });
          }
          return purchase;
        })
      });

    case SET_PURCHASE_SUM:
      return Object.assign({}, state, {
        purchases: state.purchases.map((purchase, id) => {
          if (id === action.id) {
            return Object.assign({}, purchase, {
              sum: action.sum
            });
          }
          return purchase;
        })
      });

    default:
      return state;
  }
}

export default rootReducer;