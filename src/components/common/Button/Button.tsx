import React from "react";
import clsx from "clsx";
import { IButton } from "./Button.types";
import "./styles.scss";

export function Button({ primary, children, onClick }: IButton) {
  return (
    <button type="button" className={clsx("buttonCommon", primary && "primary")} onClick={onClick}>
      {children}
    </button>
  );
}
