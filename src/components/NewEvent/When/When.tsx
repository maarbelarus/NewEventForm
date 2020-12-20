import React from "react";
import clsx from "clsx";
import { DateTime, TextField } from "components/common";
import { IWhen } from "./When.types";

export function When({ duration, onDurationChange, date, onDateChange, time, onTimeChange, validationErrors }: IWhen) {
  return (
    <div className={clsx("whenContainer", "formElementContainer")}>
      <h2 className="formElementTitle">When</h2>
      <DateTime
        label="Starts on *"
        betweenText="at"
        date={date}
        onDateChange={e => onDateChange(e.target.value as string)}
        time={time}
        onTimeChange={e => onTimeChange(e.target.value as string)}
        validationError={validationErrors.date}
      />
      <TextField
        className="inputItem"
        value={duration}
        onChange={e => onDurationChange(e.target.value as number)}
        type="number"
        label="Duration"
        afterText="hour"
        validationError={validationErrors.duration}
      />
    </div>
  );
}
