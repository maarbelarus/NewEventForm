export interface ISelect {
  value: any;
  onChange: (item: any) => void;
  optionList: any[];
  label: string;
  fullWidth?: boolean;
  className?: string;
  validationError?: string;
}