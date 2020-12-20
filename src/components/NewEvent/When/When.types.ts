export interface IWhen {
  duration: number;
  onDurationChange: (duration: number) => void;
  date: string;
  onDateChange: (date: string) => void;
  time: string;
  onTimeChange: (date: string) => void;
  validationErrors: Record<string, string>;
}
