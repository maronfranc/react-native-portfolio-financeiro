import { ActionInterface } from "../interfaces";

export const BUY = 'BUY';
export const SELL = 'SELL';

export const buyAction = (amount: number, name: string): ActionInterface => {
  return {
    type: BUY,
    amount: amount,
    name: name
  }
}

export const sellAction = (amount: number, name: string): ActionInterface => {
  return {
    type: SELL,
    amount,
    name
  }
}