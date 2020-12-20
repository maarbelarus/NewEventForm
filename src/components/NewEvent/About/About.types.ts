export interface IAbout {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  category: any;
  setCategory: (category: any) => void;
  categoryList: any[];
  payment: boolean | string;
  onPaymentChange: (payment: string | boolean) => void;
  fee: number;
  onFeeChange: (fee: number) => void;
  reward: number;
  onRewardChange: (reward: number) => void;
  validationErrors: Record<string, string>;
}
