import {
  SET_NAME,
  SET_ACCOUNT,
  ADD_PURCHASE,
  REMOVE_PURCHASE,
  SET_PURCHASE_PLACE,
  SET_PURCHASE_DATE,
  SET_PURCHASE_DESCRIPTION,
  SET_PURCHASE_SUM,
} from "../constants/action-types";

export function setName(name) {
  return { type: SET_NAME, name }
};

export function setAccount(account) {
  return { type: SET_ACCOUNT, account }
};

export function addPurchase() {
  return { type: ADD_PURCHASE }
};

export function removePurchase(id) {
  return { type: REMOVE_PURCHASE, id }
};

export function setPurchasePlace(id, place) {
  return { type: SET_PURCHASE_PLACE, id, place }
};

export function setPurchaseDate(id, date) {
  return { type: SET_PURCHASE_DATE, id, date }
};

export function setPurchaseDescription(id, description) {
  return { type: SET_PURCHASE_DESCRIPTION, id, description }
};

export function setPurchaseSum(id, sum) {
  return { type: SET_PURCHASE_SUM, sum }
};
