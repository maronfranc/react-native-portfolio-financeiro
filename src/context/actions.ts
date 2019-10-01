export const BUY = 'BUY';
export const SELL = 'SELL';

export const buyAction = (amount: number, name: string) => {
  return {
    type: BUY,
    amount: amount,
    name: name
  }
}

export const sellAction = (amount: number, name: string) => {
  return {
    type: SELL,
    amount,
    name
  }
}