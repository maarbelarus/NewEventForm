import React from "react";
import clsx from "clsx";
import "./RadioGroup.scss";
import { IRadioGroup } from "./RadioGroup.types";

export function RadioGroup({ name, value, onChange, optionList, label, className, validationError = "" }: IRadioGroup) {
  return (
    <div className={clsx("radioGroupCommon", validationError && "error", className)}>
      <div className="radioGroupLabel">{label}</div>
      {optionList.map(option => (
        <span key={`${option.id}-${option.label}`}>
          <input
            type="radio"
            id={`${option.id}-${option.label}`}
            checked={option.value === value}
            name={name}
            onChange={() => onChange(option.value)}
          />
          <label htmlFor={`${option.id}-${option.label}`} className="radioLabel">
            {option.label}
          </label>
        </span>
      ))}
      {validationError && <div className="errorText">{validationError}</div>}
    </div>
  );
}
