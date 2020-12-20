import React from "react";

export interface IDateTime {
  label: string;
  betweenText?: string;
  date: string;
  onDateChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  time: string;
  onTimeChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  validationError?: string;
}
