export interface IRadioOption {
  id: string;
  label: string;
  value: string | boolean;
}

export interface IRadioGroup {
  name: string;
  value: boolean | string;
  onChange: (val: boolean | string) => void;
  optionList: IRadioOption[];
  label: string;
  className?: string;
  validationError?: string;
}
