import React, { useState } from "react";
import clsx from "clsx";
import { ISelect } from "./Select.types";
import "./styles.scss";

export function Select({ value, onChange, label, fullWidth, className, optionList, validationError = "" }: ISelect) {
  const [isOptionListOpened, setIsOptionListOpened] = useState<boolean>(false);

  const handleOptionClick = item => {
    setIsOptionListOpened(!isOptionListOpened);
    onChange(item);
  };

  return (
    <div className={clsx("selectCommon", fullWidth && "fullWidth", validationError && "error", className)}>
      <div className="label">{label}</div>
      <input readOnly value={value.label} onClick={() => setIsOptionListOpened(!isOptionListOpened)} />
      {isOptionListOpened && (
        <div className="optionList">
          {optionList.map(option => (
            <button type="button" className="optionItem" key={option.id} onClick={() => handleOptionClick(option)}>
              {option.label}
            </button>
          ))}
        </div>
      )}
      {validationError && <div className="errorText">{validationError}</div>}
    </div>
  );
}
