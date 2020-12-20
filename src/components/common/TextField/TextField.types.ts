import React from "react";

export interface ITextField {
  value: string | number | "";
  label: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  type?: "text" | "number";
  fullWidth?: boolean;
  className?: string;
  readonly?: boolean;
  multiline?: boolean;
  afterText?: string;
  validationError?: string;
}