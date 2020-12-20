import React from "react";
import { IModal } from "./IModal";
import "./styles.scss";

export function Modal({ isOpen, children }: IModal) {
  return <>{isOpen && <div className="modalCommon">{children}</div>}</>;
}
