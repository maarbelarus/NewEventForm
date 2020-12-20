export type modalType = "success" | "error";

export interface IResultModalState {
  isOpen: boolean;
  type: modalType;
}

export interface IResultModalAction {
  type: string;
}
