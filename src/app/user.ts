import { Spending } from './spending';

export interface User {
  id: number;
  name: string;
  surname: string;
  balance: number;
  spendings: Spending[];
  categories: string[];
}
