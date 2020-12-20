import { SET_CATEGORY_DATA, SET_COORDINATOR_DATA } from "actions/NewEvent";
import { INewEventState } from "./NewEvent.types";

export const newEventState: INewEventState = {
  categoryData: [],
  coordinatorData: []
};

export function newEventReducer(state = newEventState, action) {
  switch (action.type) {
    case SET_CATEGORY_DATA: {
      return { ...state, categoryData: action.payload.map(item => ({ ...item, label: item.name })) };
    }
    case SET_COORDINATOR_DATA: {
      return {
        ...state,
        coordinatorData: action.payload.map(item => ({ ...item, label: `${item.name} ${item.lastname}` }))
      };
    }
    default:
      return state;
  }
}
