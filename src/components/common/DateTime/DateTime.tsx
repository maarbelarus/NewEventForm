import React from "react";
import "./styles.scss";
import clsx from "clsx";
import { IDateTime } from "./DateTime.types";

export function DateTime({
  label,
  betweenText = "",
  date,
  onDateChange,
  time,
  onTimeChange,
  validationError = ""
}: IDateTime) {
  return (
    <div className={clsx("dateTimeCommon", validationError && "error")}>
      <div className="label">{label}</div>
      <div>
        <input type="date" value={date} onChange={onDateChange} />
        {betweenText && <span className="betweenText">{betweenText}</span>}
        <input type="time" value={time} onChange={onTimeChange} />
      </div>
      {validationError && <div className="errorText">{validationError}</div>}
    </div>
  );
}
