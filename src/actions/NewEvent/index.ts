import axios from "axios";
import { SET_SUCCESS } from "reducers/ResultModal";

export const SET_CATEGORY_DATA = "SET_CATEGORY_DATA";
export const SET_COORDINATOR_DATA = "SET_RESPONSIBLE_DATA";

export function submitData(data, dispatch) {
  console.log("Form data:", data);
  dispatch({ type: SET_SUCCESS });
}

export function getCategoryData(dispatch) {
  return axios.get("http://www.mocky.io/v2/5bcdd3942f00002c00c855ba").then(result => {
    dispatch({
      type: SET_CATEGORY_DATA,
      payload: result.data
    });
  });
}

export function getCoordinatorData(dispatch) {
  return axios.get("http://www.mocky.io/v2/5bcdd7992f00006300c855d5").then(result => {
    dispatch({
      type: SET_COORDINATOR_DATA,
      payload: result.data
    });
  });
}
