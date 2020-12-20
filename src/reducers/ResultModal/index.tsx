import { IResultModalAction, IResultModalState } from "./ResultModal.types";

export const SET_SUCCESS = "SET_SUCCESS";
export const SET_ERROR = "SET_ERROR";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const resultModalState: IResultModalState = {
  isOpen: false,
  type: "success"
};

export function resultModalReducer(state: IResultModalState = resultModalState, action: IResultModalAction) {
  switch (action.type) {
    case SET_SUCCESS: {
      return { isOpen: true, type: "success" } as IResultModalState;
    }
    case SET_ERROR: {
      return { isOpen: true, type: "error" } as IResultModalState;
    }
    case CLOSE_MODAL: {
      return { ...state, isOpen: false };
    }
    default:
      return state;
  }
}
