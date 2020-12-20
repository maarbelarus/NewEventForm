import React from "react";
import clsx from "clsx";
import { ITextField } from "./TextField.types";
import "./styles.scss";

export function TextField({
  value,
  onChange,
  label,
  maxLength,
  fullWidth,
  type = "text",
  className,
  readonly = false,
  multiline = false,
  afterText = "",
  validationError = ""
}: ITextField) {
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (maxLength && `${value}`?.length >= maxLength) {
      return;
    }
    onChange(e);
  };

  return (
    <div className={clsx(className, fullWidth && "fullWidth", "textFieldCommon", validationError && "error")}>
      <div className="label">{label}</div>
      <div>
        {multiline ? (
          <textarea onChange={handleChange} defaultValue={value} readOnly={readonly} />
        ) : (
          <input value={value} onChange={handleChange} type={type} readOnly={readonly} />
        )}
        {afterText && <span className="afterText">{afterText}</span>}
      </div>
      {!!maxLength && (
        <div className="maxLength">
          {`${value}`?.length || 0}/{maxLength}
        </div>
      )}
      {validationError && <div className="errorText">{validationError}</div>}
    </div>
  );
}
